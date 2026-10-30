import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Gift, Sparkles, Copy, Clock, ShieldCheck } from "lucide-react";

const COUPON = "MAMALOVE";
const CHECKOUT_URL = "https://pay.hotmart.com/Q102665963M?";

const DiscountPopup = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"value" | "coupon">("value");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 2 * 60 * 1000);
    return () => clearTimeout(timer);
  }, []);

  const copyCoupon = () => {
    navigator.clipboard.writeText(COUPON);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[360px] p-0 overflow-hidden rounded-2xl border-amber-200">
        {step === "value" ? (
          <div className="p-5">
            <div className="flex justify-center mb-3">
              <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                <Sparkles className="w-3 h-3" /> BabyBites App
              </span>
            </div>
            <h2 className="text-lg font-extrabold text-foreground text-center leading-tight mb-2">
              Everything You Need to Feed Your Baby Right
            </h2>
            <p className="text-[12px] text-muted-foreground text-center leading-snug mb-4">
              BabyBites takes the guesswork out of mealtime. Loved by 1,000+ moms,
              it gives you a complete, pediatrician-approved system in one app.
            </p>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-3 border border-amber-100 mb-4">
              <div className="grid grid-cols-1 gap-1.5">
                {[
                  "300+ healthy, age-by-age recipes",
                  "Weekly meal plans done for you",
                  "Food safety & allergy scanner",
                  "Growth tracker + smart shopping list",
                ].map((item, i) => (
                  <p key={i} className="flex items-center gap-2 text-[11px] text-foreground font-medium">
                    <Check className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <p className="text-[11px] text-center text-foreground/70 mb-3">
              No more stressing, googling, or worrying — just open the app and feed with confidence.
            </p>
            <Button
              onClick={() => setStep("coupon")}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-sm py-5 rounded-full shadow-lg"
            >
              See My Special Gift 🎁
            </Button>
          </div>
        ) : (
          <div className="p-5 text-center">
            <div className="flex justify-center mb-3">
              <span className="inline-flex items-center gap-1 bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full animate-pulse">
                <Clock className="w-3 h-3" /> Today Only
              </span>
            </div>
            <div className="flex justify-center mb-2">
              <Gift className="w-10 h-10 text-amber-500" />
            </div>
            <h2 className="text-2xl font-extrabold text-foreground leading-tight mb-1">
              $10 OFF BabyBites
            </h2>
            <p className="text-[12px] text-muted-foreground leading-snug mb-4">
              An <strong className="text-amber-700">exclusive discount just for moms in our WhatsApp group</strong>.
              Valid today only — don't miss it!
            </p>

            <p className="text-[11px] text-foreground/70 mb-1">Your coupon code:</p>
            <button
              onClick={copyCoupon}
              className="w-full flex items-center justify-center gap-2 bg-amber-50 border-2 border-dashed border-amber-400 rounded-xl py-3 mb-3 hover:bg-amber-100 transition-colors"
            >
              <span className="text-xl font-extrabold tracking-widest text-amber-700">{COUPON}</span>
              <Copy className="w-4 h-4 text-amber-600" />
            </button>
            <p className="text-[10px] text-muted-foreground mb-3">
              {copied ? "Copied! ✓ " : ""}Just paste <strong>{COUPON}</strong> at checkout to get $10 off.
            </p>

            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="block">
              <Button className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 text-white font-extrabold text-base py-6 rounded-full shadow-2xl flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" />
                Claim My $10 Off Now
              </Button>
            </a>
            <div className="flex items-center justify-center gap-1.5 mt-3 text-[10px] text-foreground/70">
              <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
              <span>Secure checkout • Discount applied with code</span>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DiscountPopup;
