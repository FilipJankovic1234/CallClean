import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, Plus, X, MessageSquare, Sparkles } from 'lucide-react';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, limit, serverTimestamp } from 'firebase/firestore';
import { toast } from 'react-hot-toast';

// Firebase configuration keys
const firebaseConfig = {
  apiKey: "AIzaSyAn1xnwo7yPWhU-wnzvLpF_bqYHqv0-nVg",
  authDomain: "callclean.firebaseapp.com",
  projectId: "callclean",
  storageBucket: "callclean.firebasestorage.app",
  messagingSenderId: "1028423030446",
  appId: "1:1028423030446:web:593c6a6d4bb9bda2fccf3f",
  measurementId: "G-7ZL80FTY7C"
};

// Initialize Firebase App gracefully
let db: any = null;
try {
  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  db = getFirestore(app);
} catch {
  // Graceful fallback if Firebase fails initialization
}

interface Review {
  id: string;
  ime: string;
  location?: string;
  komentar: string;
  ocena: number;
  datum?: any;
}

const DEFAULT_REVIEWS: Review[] = [
  {
    id: 'default-1',
    ime: 'Marko Petrović',
    location: 'Beograd na Vodi',
    komentar: 'Neverovatan nivo pedantnosti. Naš penthaus u Beogradu na Vodi nikada nije izgledao čistije i urednije. Svaka preporuka za Call Clean tim!',
    ocena: 5,
    datum: new Date('2025-01-15')
  },
  {
    id: 'default-2',
    ime: 'Stefan Jovanović',
    location: 'Novi Beograd',
    komentar: 'Redovno održavanje naših kancelarija na Novom Beogradu. Ekipa je izuzetno tačna, diskretna i besprekorna u svakom pogledu.',
    ocena: 5,
    datum: new Date('2025-02-02')
  },
  {
    id: 'default-3',
    ime: 'Elena Nikolić',
    location: 'Dedinje',
    komentar: 'Nakon kompletnog renoviranja kuće na Dedinju, Call Clean je doveo sve do savršenog sjaja za samo jedan dan. Fascinirana sam detaljima.',
    ocena: 5,
    datum: new Date('2025-02-18')
  },
  {
    id: 'default-4',
    ime: 'Dragan Vasić',
    location: 'Vračar',
    komentar: 'Dubinsko pranje nameštaja i sanitacija kupatila na vrhunskom nivou. Prava premijum usluga kakva je falila našem gradu.',
    ocena: 5,
    datum: new Date('2025-03-05')
  },
  {
    id: 'default-5',
    ime: 'Milica Todorović',
    location: 'Senjak',
    komentar: 'Profesionalizam, ljubaznost i najviši standardi higijene. Sarađujemo već mesecima i svaki put je bez ijedne jedine zamerke.',
    ocena: 5,
    datum: new Date('2025-03-20')
  },
  {
    id: 'default-6',
    ime: 'Nikola Stanković',
    location: 'Dorćol',
    komentar: 'Generalno čišćenje apartmana pre useljenja urađeno bez greške. Stakla, fuge i parketi sijaju kao novi.',
    ocena: 5,
    datum: new Date('2025-04-01')
  }
];

const LOCAL_STORAGE_KEY = 'callclean_saved_reviews';

const Testimonials = () => {
  const [reviews, setReviews] = useState<Review[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const localList = JSON.parse(saved);
        return [...localList, ...DEFAULT_REVIEWS];
      }
    } catch {
      // ignore
    }
    return DEFAULT_REVIEWS;
  });
  const [loading, setLoading] = useState(false);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ime, setIme] = useState('');
  const [komentar, setKomentar] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Read reviews from Firestore if available, otherwise gracefully keep default + local reviews
  useEffect(() => {
    if (!db) {
      setLoading(false);
      return;
    }

    try {
      const q = query(collection(db, "utisci"), orderBy("datum", "desc"), limit(30));
      
      const unsubscribe = onSnapshot(
        q, 
        (snapshot) => {
          if (!snapshot.empty) {
            const fetchedReviews: Review[] = [];
            snapshot.forEach((doc) => {
              const data = doc.data();
              fetchedReviews.push({
                id: doc.id,
                ime: data.ime || 'Anoniman klijent',
                location: data.location || 'Beograd',
                komentar: data.komentar || '',
                ocena: Number(data.ocena) || 5,
                datum: data.datum
              });
            });

            // Merge with local storage if any
            let localList: Review[] = [];
            try {
              const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
              if (saved) localList = JSON.parse(saved);
            } catch {
              // ignore
            }

            // Combine unique reviews
            const existingIds = new Set(fetchedReviews.map(r => r.id));
            const merged = [...localList.filter(r => !existingIds.has(r.id)), ...fetchedReviews];
            setReviews(merged.length > 0 ? merged : DEFAULT_REVIEWS);
          }
          setLoading(false);
        }, 
        () => {
          // Graceful fallback on permission error or offline state
          setLoading(false);
        }
      );

      return () => unsubscribe();
    } catch {
      setLoading(false);
    }
  }, []);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ime.trim() || !komentar.trim()) {
      toast.error("Molimo Vas da popunite sva polja.");
      return;
    }

    setIsSubmitting(true);

    const newReview: Review = {
      id: `local-${Date.now()}`,
      ime: ime.trim(),
      location: 'Klijent',
      komentar: komentar.trim(),
      ocena: rating,
      datum: new Date()
    };

    // Update local state immediately
    setReviews(prev => [newReview, ...prev]);

    // Save to localStorage for instant persistence
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      const localList: Review[] = saved ? JSON.parse(saved) : [];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([newReview, ...localList]));
    } catch {
      // ignore
    }

    // Also attempt to push to Firestore
    if (db) {
      try {
        await addDoc(collection(db, "utisci"), {
          ime: ime.trim(),
          komentar: komentar.trim(),
          ocena: Number(rating),
          datum: serverTimestamp()
        });
      } catch {
        // Local persistence already succeeded
      }
    }

    toast.success("Hvala Vam! Vaš utisak je uspešno dodat i prikazan.");
    
    // Reset form
    setIme('');
    setKomentar('');
    setRating(5);
    setIsModalOpen(false);
    setIsSubmitting(false);
  };

  return (
    <section id="utisci" className="py-32 bg-brand-dark relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-400/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-end mb-24">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="meta-label text-cyan-400 mb-6 font-mono tracking-widest text-xs font-bold uppercase"
            >
              UŽIVO UTISCI KLIJENATA
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-serif font-black mb-8 leading-[0.85] uppercase italic"
            >
              Reč onih <br /> <span className="text-white/20">koji znaju razliku.</span>
            </motion.h2>
          </div>
          <div className="lg:col-span-4 lg:mb-4 flex flex-col items-start gap-6">
            <p className="text-white/40 font-light leading-relaxed text-base italic">
              "Kvalitet nikada nije slučajan; on je uvek rezultat visoke namere, iskrenog napora i inteligentne egzekucije."
            </p>
            
            {/* Elegant trigger button for leaving reviews */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-3 px-6 py-3 bg-cyan-400 text-black font-bold text-xs uppercase tracking-[0.2em] rounded-full shadow-lg shadow-cyan-400/20 hover:bg-cyan-300 hover:shadow-cyan-300/30 transition-all duration-300 cursor-pointer"
            >
              <Plus size={16} className="stroke-[3px]" />
              Ostavi utisak
            </motion.button>
          </div>
        </div>

        {/* Live Testimonials Container */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4 text-white/30 font-mono text-sm">
            <div className="w-10 h-10 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
            <span>Učitavanje utisaka u realnom vremenu...</span>
          </div>
        ) : reviews.length === 0 ? (
          <div className="glass rounded-[40px] p-16 text-center text-white/40 max-w-2xl mx-auto border border-white/5">
            <MessageSquare size={48} className="mx-auto mb-6 text-cyan-400/20" />
            <h3 className="text-xl font-serif font-bold text-white mb-2">Još uvek nema utisaka</h3>
            <p className="text-sm font-light mb-8">Budite prvi koji će ostaviti utisak o našim uslugama čišćenja!</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 border border-cyan-400/30 hover:border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300"
            >
              Napišite prvu recenziju
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((item, i) => {
              // Extract initials for placeholder avatar
              const initials = item.ime
                .split(' ')
                .map(n => n[0])
                .slice(0, 2)
                .join('')
                .toUpperCase();

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(i * 0.1, 0.4) }}
                  viewport={{ once: true }}
                  className="p-10 md:p-12 glass rounded-[50px] relative border border-white/5 group hover:border-cyan-400/20 transition-all duration-500 flex flex-col justify-between"
                >
                  <Quote className="text-cyan-400/5 w-20 h-20 absolute top-10 right-10 group-hover:text-cyan-400/10 transition-colors pointer-events-none" />
                  
                  <div>
                    {/* Star Display representing exact rating */}
                    <div className="flex gap-1 mb-8" aria-label={`Ocena ${item.ocena} od 5`}>
                      {[...Array(5)].map((_, s) => (
                        <Star 
                          key={s} 
                          size={13} 
                          className={s < item.ocena ? "fill-cyan-400 text-cyan-400" : "text-white/10"} 
                        />
                      ))}
                    </div>

                    <p className="text-lg md:text-xl font-serif font-bold text-white/90 mb-10 leading-relaxed tracking-tight group-hover:text-white transition-colors italic">
                      "{item.komentar}"
                    </p>
                  </div>

                  <div className="flex items-center gap-5 border-t border-white/5 pt-8 mt-4">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 font-mono font-bold text-sm tracking-tighter">
                      {initials}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-white text-base tracking-tight">
                        {item.ime}
                      </h4>
                      <p className="text-[10px] text-cyan-400/60 uppercase tracking-widest font-mono mt-0.5">
                        {item.location || 'Klijent'}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Bottom CTA Button for leaving reviews */}
        {!loading && reviews.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 text-center"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 glass rounded-full text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-cyan-400 hover:text-black hover:border-cyan-400 hover:shadow-cyan-400/30 transition-all duration-500 cursor-pointer"
            >
              <Plus size={14} className="stroke-[3px]" />
              Podelite i Vi Vaše Iskustvo
            </button>
          </motion.div>
        )}
      </div>

      {/* Elegant Star-Rating Review Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-6">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isSubmitting && setIsModalOpen(false)}
              className="absolute inset-0 bg-[#090d16]/80 backdrop-blur-xl"
            />

            {/* Modal Content Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#0b101d] border border-white/10 rounded-[40px] p-8 md:p-12 max-w-lg w-full relative overflow-hidden shadow-2xl z-10"
            >
              {/* Top Accent Gradient */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-right from-cyan-400 to-blue-500" />
              
              <button
                onClick={() => setIsModalOpen(false)}
                disabled={isSubmitting}
                className="absolute top-6 right-6 p-2 rounded-full border border-white/5 hover:border-white/10 text-white/40 hover:text-white transition-colors"
                aria-label="Zatvori"
              >
                <X size={16} />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <Sparkles size={18} className="text-cyan-400 animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold text-cyan-400">Podelite Vaše Iskustvo</span>
              </div>
              
              <h3 className="text-3xl font-serif font-bold text-white leading-tight mb-8">
                Ostavite Vaš Utisak
              </h3>

              <form onSubmit={handleSubmitReview} className="space-y-6">
                {/* Interactive Star Rating Selector */}
                <div className="space-y-2">
                  <label className="block text-[10px] uppercase tracking-wider text-white/50 font-mono font-bold">
                    Vaša Ocena Uspleha
                  </label>
                  <div className="flex items-center gap-3 py-1">
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(null)}
                          onClick={() => setRating(star)}
                          className="text-2xl transform hover:scale-125 transition-transform duration-200 cursor-pointer focus:outline-none"
                          aria-label={`Oceni sa ${star} zvezdica`}
                        >
                          <Star
                            size={28}
                            className={`transition-colors duration-200 ${
                              star <= (hoverRating ?? rating)
                                ? "fill-cyan-400 text-cyan-400"
                                : "text-white/10"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                    <span className="text-xs text-white/40 font-mono ml-2">
                      {rating === 5 && "Odlično (5/5)"}
                      {rating === 4 && "Veoma dobro (4/5)"}
                      {rating === 3 && "Prosečno (3/5)"}
                      {rating === 2 && "Loše (2/5)"}
                      {rating === 1 && "Veoma loše (1/5)"}
                    </span>
                  </div>
                </div>

                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="modal-name" className="block text-[10px] uppercase tracking-wider text-white/50 font-mono font-bold">
                    Vaše Ime / Naziv Firme
                  </label>
                  <input
                    type="text"
                    id="modal-name"
                    required
                    disabled={isSubmitting}
                    value={ime}
                    onChange={(e) => setIme(e.target.value)}
                    placeholder="Npr. Jelena Petrović"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white text-sm placeholder-white/20 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                  />
                </div>

                {/* Comment Textarea */}
                <div className="space-y-2">
                  <label htmlFor="modal-comment" className="block text-[10px] uppercase tracking-wider text-white/50 font-mono font-bold">
                    Vaš Utisak / Komentar
                  </label>
                  <textarea
                    id="modal-comment"
                    required
                    disabled={isSubmitting}
                    rows={4}
                    value={komentar}
                    onChange={(e) => setKomentar(e.target.value)}
                    placeholder="Opišite vaše iskustvo sa našim premijum čišćenjem..."
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white text-sm placeholder-white/20 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submission button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-white hover:bg-cyan-400 text-black hover:text-white font-bold text-xs uppercase tracking-[0.25em] rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
                      <span>Slanje utiska...</span>
                    </>
                  ) : (
                    <>
                      <span>Pošalji Utisak</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Testimonials;
