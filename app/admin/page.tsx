'use client';

import { useState, useEffect } from 'react';
import { Copy, Link as LinkIcon, CheckCircle2, MessageSquare } from 'lucide-react';

export default function AdminPage() {
  const [prefix, setPrefix] = useState('Mr.');
  const [guestName, setGuestName] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [baseUrl, setBaseUrl] = useState('');

  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);

  const prefixes = ['Mr.', 'Mrs.', 'Mr. & Mrs.', 'Family', 'Dear'];

  const generateLink = () => {
    if (!guestName.trim()) return;
    const url = new URL(baseUrl);
    url.searchParams.set('p', prefix);
    url.searchParams.set('n', guestName.trim());
    setGeneratedLink(url.toString());
  };

  const fullMessage = `Dear ${prefix} ${guestName} ❤️

With joyful hearts, we warmly invite you and your family to celebrate one of the most special days of our lives as we begin our journey together.

Please view our wedding invitation and all the event details through the link below 🌐:

${generatedLink}

Your presence would truly mean the world to us, and we would be honored to celebrate this beautiful moment together.

With love,
❤️ Nipun & Achini`;

  const copyToClipboard = async (text: string, setCopiedState: (val: boolean) => void) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedState(true);
      setTimeout(() => setCopiedState(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#fdfbf7_100%)] p-6 md:p-12 font-sans">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <h1 className="font-serif text-4xl text-[#3a3022] mb-3">Invitation Generator</h1>
          <p className="text-[#8c7a6b]">Create personalized links and messages for your guests</p>
        </div>

        <div className="bg-white rounded-3xl shadow-[0_15px_40px_rgba(201,162,39,0.1)] border border-[#f2d89c]/40 p-8 md:p-10">
          <div className="space-y-6">
            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.15em] text-[#a67c00] mb-2">Prefix</label>
                <select 
                  value={prefix}
                  onChange={(e) => setPrefix(e.target.value)}
                  className="w-full h-14 px-4 rounded-xl border border-[#f2d89c]/60 bg-white/65 text-[#3a3022] outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] transition-all"
                >
                  {prefixes.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.15em] text-[#a67c00] mb-2">Guest Name</label>
                <input 
                  type="text" 
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="e.g. Sanjaya"
                  className="w-full h-14 px-4 rounded-xl border border-[#f2d89c]/60 bg-white/65 text-[#3a3022] placeholder-[#d4af37]/50 outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] transition-all"
                />
              </div>
            </div>

            <button 
              onClick={generateLink}
              disabled={!guestName.trim()}
              className="w-full h-14 mt-4 rounded-full bg-[#c9a227] text-white font-bold uppercase tracking-[0.2em] text-sm hover:bg-[#a67c00] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#c9a227]/20"
            >
              Generate Link
            </button>
          </div>

          {generatedLink && (
            <div className="mt-10 pt-10 border-t border-[#f2d89c]/30 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Generated Link Section */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-[#3a3022] mb-3 flex items-center gap-2">
                  <LinkIcon className="w-4 h-4 text-[#c9a227]" /> 
                  Generated Link
                </h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 p-4 rounded-xl bg-[#fdfbf7] border border-[#f2d89c]/40 text-[#5c4d3c] break-all text-sm font-medium">
                    {generatedLink}
                  </div>
                  <button 
                    onClick={() => copyToClipboard(generatedLink, setCopiedLink)}
                    className="flex items-center justify-center gap-2 h-auto py-3 sm:py-0 px-6 rounded-xl bg-[#fdfbf7] border border-[#c9a227] text-[#c9a227] hover:bg-[#c9a227] hover:text-white transition-colors font-semibold"
                  >
                    {copiedLink ? <CheckCircle2 className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    <span>Copy Link</span>
                  </button>
                </div>
              </div>

              {/* Message Template Section */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-[#3a3022] mb-3 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#c9a227]" /> 
                  Full Message Template
                </h3>
                <div className="relative">
                  <div className="p-6 rounded-2xl bg-[#fdfbf7] border border-[#f2d89c]/40 text-[#5c4d3c] text-sm leading-relaxed whitespace-pre-wrap font-medium">
                    {fullMessage}
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button 
                      onClick={() => copyToClipboard(fullMessage, setCopiedMessage)}
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#c9a227] text-white hover:bg-[#a67c00] transition-colors font-semibold shadow-lg shadow-[#c9a227]/20"
                    >
                      {copiedMessage ? <CheckCircle2 className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                      <span>Copy Full Message</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
