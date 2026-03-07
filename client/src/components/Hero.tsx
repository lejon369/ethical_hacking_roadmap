import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 py-20 md:py-32">
      {/* Background image */}
      <div className="absolute inset-0 opacity-40">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663403487178/a6twz7kU32fE52zb7Fpmvp/hero-ethical-hacking-bwDBK6pHLiEertJUSRUh7L.webp"
          alt="Cybersecurity workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-blue-900/60 to-slate-900/80"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wide">
              Your Security Journey Starts Here
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Master Ethical Hacking & Security Research
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
            A comprehensive, structured roadmap to guide you from beginner to advanced security researcher. 
            Learn from fundamentals through CTF competition mastery with hands-on labs and real-world projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={onExplore}
            >
              Explore the Roadmap
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-400 text-slate-200 hover:bg-slate-800"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-slate-700/50">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-blue-400">6</div>
              <p className="text-sm text-slate-400 mt-1">Learning Stages</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-blue-400">24</div>
              <p className="text-sm text-slate-400 mt-1">Month Timeline</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-blue-400">100+</div>
              <p className="text-sm text-slate-400 mt-1">Resources</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
