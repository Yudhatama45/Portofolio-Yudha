import './style.css'

// ===== LANGUAGE DATA =====
const lang = {
  id: {
    navHome: 'Beranda', navAbout: 'Tentang', navExp: 'Pengalaman', navSkills: 'Keahlian', navProjects: 'Proyek', navEvents: 'Event', navContact: 'Kontak',
    heroWelcome: 'SELAMAT DATANG',
    heroDesc: 'Ecosystem Builder // Blockchain Enthusiast // Community Leader',
    heroBtn1: 'LIHAT PENGALAMAN', heroBtn2: 'HUBUNGI',
    aboutTitle: 'TENTANG', aboutSummaryTitle: '// RINGKASAN PROFESIONAL',
    aboutSummary1: 'Web3 Community Manager, Ecosystem Builder, dan Ambassador dengan pengalaman <span class="hl">4+ tahun</span> di pertumbuhan komunitas blockchain, pengembangan ekosistem DeFi, aktivasi media sosial, dan eksekusi event Web3 offline di seluruh Indonesia.',
    aboutSummary2: 'Berpengalaman mengelola komunitas <span class="hl">Telegram, Discord, dan X</span>, memimpin program ambassador, <span class="hl">manage & organize event offline Web3</span>, dan mengkoordinasi aktivasi blockchain regional.',
    expTitle: 'PENGALAMAN', eduTitle: 'PENDIDIKAN', eduDegree: 'Sarjana Pendidikan Teknik Elektro',
    skillsTitle: 'KEAHLIAN', eventsTitle: 'EVENT', projectsTitle: 'PROYEK INOVASI', contactTitle: 'KONTAK',
    contactSub: '// MARI BERKOLABORASI', contactDesc: 'Saat ini saya terbuka untuk peluang kerja baru di ekosistem Web3.',
    contactBtn: 'KIRIM PESAN', footerText: 'Dibuat dengan passion & kode',
    sending: 'MENGIRIM...', sent: '✓ TERKIRIM',
    evtHosted: 'Event Diselenggarakan', evtAttended: 'Event Dihadiri', evtPartners: 'Partner Protokol', evtSeeAll: 'LIHAT SEMUA DI LUMA',
  },
  en: {
    navHome: 'Home', navAbout: 'About', navExp: 'Experience', navSkills: 'Skills', navProjects: 'Projects', navEvents: 'Events', navContact: 'Contact',
    heroWelcome: 'WELCOME TO MY SPACE',
    heroDesc: 'Ecosystem Builder // Blockchain Enthusiast // Community Leader',
    heroBtn1: 'VIEW EXPERIENCE', heroBtn2: 'CONNECT',
    aboutTitle: 'ABOUT', aboutSummaryTitle: '// PROFESSIONAL SUMMARY',
    aboutSummary1: 'Web3 Community Manager, Ecosystem Builder, and Ambassador with <span class="hl">4+ years</span> of experience in blockchain community growth, DeFi ecosystem development, social media activation, and offline Web3 event execution across Indonesia.',
    aboutSummary2: 'Experienced in managing <span class="hl">Telegram, Discord, and X</span> communities, leading ambassador programs, <span class="hl">manage & organize offline Web3 events</span>, and coordinating regional blockchain activations.',
    expTitle: 'EXPERIENCE', eduTitle: 'EDUCATION', eduDegree: 'Bachelor of Electrical Engineering Education',
    skillsTitle: 'SKILLS', eventsTitle: 'EVENTS', projectsTitle: 'INNOVATION PROJECT', contactTitle: 'GET IN TOUCH',
    contactSub: '// LET\'S COLLABORATE', contactDesc: 'Currently open to new opportunities in the Web3 ecosystem.',
    contactBtn: 'TRANSMIT MESSAGE', footerText: 'Built with passion & code',
    sending: 'TRANSMITTING...', sent: '✓ TRANSMITTED',
    evtHosted: 'Events Hosted', evtAttended: 'Events Attended', evtPartners: 'Protocol Partners', evtSeeAll: 'SEE ALL ON LUMA',
  }
};

// ===== EXPERIENCE DATA (sorted: active first, then by recency) =====
const experiences = [
  // ── ACTIVE ROLES ──
  { role: 'Ambassador OSL Indonesia', co: 'OSL', type: 'Lead', period: 'Mar 2026 – Present', active: true, icon: '⬡',
    id: ['Berperan sebagai penggerak dalam memperluas adopsi ekosistem OSL di Indonesia', 'Edukasi teknis dan pengembangan produk Web3', 'Mendorong pertumbuhan komunitas OSL secara nasional'],
    en: ['Drive OSL ecosystem adoption expansion across Indonesia', 'Technical education and Web3 product development', 'Accelerate national OSL community growth'] },
  { role: 'Ambassador Arbitrum Indonesia', co: 'Arbitrum', type: 'Contract', period: 'Oct 2025 – Present', active: true, icon: '◈',
    id: ['Memimpin inisiatif ekspansi komunitas Arbitrum di Indonesia', 'Mengembangkan program edukasi untuk pengguna Web3 lokal', 'Mendukung strategi awareness ekosistem'],
    en: ['Lead community expansion for Arbitrum in Indonesia', 'Develop educational programs for local Web3 users', 'Support ecosystem awareness strategy'] },
  { role: 'Community Manager', co: 'Dev Web3 Jogja', type: 'Full-time', period: 'Mar 2025 – Present', active: true, icon: '⬢',
    id: ['Menyelenggarakan program edukasi Web3 dan workshop blockchain', 'Mengkoordinasi operasi dan eksekusi event', 'Mendukung ekosistem pembelajaran Web3 di Yogyakarta'],
    en: ['Deliver Web3 education programs and blockchain workshops', 'Coordinate operations and event execution', 'Support Web3 learning ecosystem in Yogyakarta'] },
  { role: 'Founder', co: 'Work From Airdrop Indonesia', type: 'Full-time', period: 'Feb 2024 – Present', active: true, icon: '◇',
    id: ['Membangun komunitas airdrop Web3', 'Mengorganisir meetup Web3 mingguan (WFA Friday – Jogja)', 'Mengedukasi anggota tentang evaluasi proyek'],
    en: ['Build and manage Web3 airdrop community', 'Organize weekly Web3 meetups (WFA Friday – Jogja)', 'Educate members on project evaluation strategies'] },
  { role: 'Owner', co: 'Airdrop Hunter +++', type: 'Full-time', period: 'Dec 2023 – Present', active: true, icon: '⬡',
    id: ['Mengelola operasional platform airdrop hunting', 'Kurasi dan analisis proyek Web3 potensial', 'Membangun strategi farming on-chain'],
    en: ['Manage airdrop hunting platform operations', 'Curate and analyze promising Web3 projects', 'Build on-chain farming strategies'] },
  // ── COMPLETED ROLES ──
  { role: 'Administrator', co: 'Belajar Defi', type: 'Part-time', period: 'Aug 2025 – Mar 2026', icon: '◈',
    id: ['Mengelola aktivitas operasional dan koordinasi komunitas', 'Mendukung inisiatif edukasi DeFi'],
    en: ['Manage operational activities and community coordination', 'Support DeFi educational initiatives'] },
  { role: 'DeFi Nusantara Regional Yogyakarta', co: 'Nusa Finance', type: 'Contract', period: 'Mar 2025 – Mar 2026', icon: '⬢',
    id: ['Mengorganisir event pembelajaran DeFi offline', 'Mengelola inisiatif Web3 regional', 'Memfasilitasi onboarding peserta DeFi baru'],
    en: ['Organize offline DeFi learning events', 'Manage regional Web3 engagement', 'Facilitate onboarding for new DeFi participants'] },
  { role: 'Admin Twitter', co: 'Noble Indonesia', type: 'Contract', period: 'Feb 2025 – Feb 2026', icon: '◇',
    id: ['Mengelola akun X resmi Noble Indonesia', 'Menyampaikan update ekosistem Cosmos', 'Menjalankan strategi konten terstruktur'],
    en: ['Manage official X account for Noble Indonesia', 'Deliver Cosmos ecosystem updates', 'Execute structured content strategy'] },
  { role: 'Ambassador Regional Indonesia', co: 'Tanssi Network', type: 'Contract', period: 'Mar – Apr 2025', icon: '⬡',
    id: ['Membangun kehadiran ekosistem Tanssi di Indonesia', 'Mengelola aktivasi komunitas'],
    en: ['Build Tanssi ecosystem presence in Indonesia', 'Manage community activation'] },
  { role: 'Head of Operations', co: 'CryptoIndo Jogja', type: 'Full-time', period: 'Apr 2024 – Jul 2025', icon: '◈',
    id: ['Memimpin operasi komunitas offline & online', 'Mengelola event Web3 skala besar di Yogyakarta', 'Mengkoordinasi partnership blockchain', 'Mengawasi logistik dan strategi eksekusi'],
    en: ['Lead offline & online community operations', 'Manage large-scale Web3 events in Yogyakarta', 'Coordinate blockchain partnerships', 'Supervise logistics and execution strategy'] },
  { role: 'Community Manager – Indonesia', co: 'Symbiosis Finance', type: 'Full-time', period: 'Mar 2024 – Apr 2025', icon: '⬢',
    id: ['Mengelola komunitas Telegram & Discord Indonesia', 'Dukungan real-time dan resolusi masalah', 'Terjemahan EN → ID', 'Memoderasi diskusi'],
    en: ['Manage Indonesian Telegram & Discord', 'Real-time user support', 'Translate EN → ID announcements', 'Moderate discussions'] },
  { role: 'Ambassador', co: 'U2U Network', type: 'Contract', period: 'Aug – Dec 2024', icon: '◈',
    id: ['Membangun komunitas Web3 Indonesia', 'Mengelola Telegram engagement'],
    en: ['Build Indonesian Web3 community', 'Manage Telegram engagement'] },
  { role: 'Assistant Jury – KRTI UNY', co: 'UNY', type: 'Internship', period: 'Jul – Sep 2024', icon: '⬢',
    id: ['Asisten juri divisi Long Endurance UAV', 'Evaluasi kompetisi robotika nasional'],
    en: ['Assistant judge for UAV division', 'National robotics competition evaluation'] },
  { role: 'Squad Community', co: 'NOBI', type: 'Part-time', period: 'Jan 2021 – Dec 2022', icon: '◇',
    id: ['Mengelola inisiatif aktivasi komunitas', 'Mendukung engagement crypto dan event offline'],
    en: ['Manage community activation', 'Support crypto engagement and offline events'] },
  { role: 'Business Owner', co: 'MDYB STORE', type: 'Entrepreneur', period: 'Jan 2016 – Jan 2025', icon: '⬡',
    id: ['E-commerce multi-platform (Tokopedia, Shopee, TikTok Shop)', 'Mengelola penjualan, marketing, dan operasi'],
    en: ['Multi-platform e-commerce (Tokopedia, Shopee, TikTok Shop)', 'Manage sales, marketing, and operations'] },
];

// ===== INNOVATION CHAIN DATA =====
const projects = [
  { name: 'QuizNih', year: 'Upcoming', status: 'building', icon: '🚀', color: '#a855f7',
    id: 'Sedang mengembangkan platform kuis interaktif yang mengintegrasikan fitur Solana Blinks, bertujuan untuk meningkatkan user engagement secara masif di Web3.',
    en: 'Building an interactive quiz platform integrating Solana Blinks features, aiming to massively increase user engagement in Web3.' },
  { name: 'MegaMendung', year: '2025', status: 'active', icon: '🛡️', color: '#3b82f6',
    id: 'Fokus pada aspek keamanan jaringan melalui pengembangan protokol Proof of Security.',
    en: 'Focused on network security aspects through Proof of Security protocol development.' },
  { name: 'Ganjel Finance', year: '2025', status: 'winner', icon: '🏆', color: '#22c55e',
    id: 'Memenangkan penghargaan "Vibe Code Winner" di Ohara.ai, menunjukkan keunggulan dalam kualitas kode dan kreativitas teknis.',
    en: 'Won "Vibe Code Winner" award at Ohara.ai, demonstrating code quality excellence and technical creativity.' },
  { name: 'Arte Finance', year: '2024', status: 'completed', icon: '🏦', color: '#06b6d4',
    id: 'Merancang infrastruktur Landing & Borrowing untuk memperkuat sektor DeFi dalam ekosistem.',
    en: 'Designed Lending & Borrowing infrastructure to strengthen the DeFi sector within the ecosystem.' },
  { name: 'Musang Charity', year: '2024', status: 'completed', icon: '💎', color: '#ec4899',
    id: 'Inisiator proyek donasi pada Base Batch 001, membangun fondasi awal keterlibatan komunitas dalam kegiatan sosial berbasis blockchain.',
    en: 'Initiator of the donation project on Base Batch 001, building the foundation for community involvement in blockchain-based social activities.' },
];

const skills = [
  { name: 'Web3 Community Management', level: 95 },
  { name: 'Blockchain & DeFi Ecosystem', level: 90 },
  { name: 'Telegram & Discord Moderation', level: 92 },
  { name: 'Social Media (X/Twitter)', level: 88 },
  { name: 'Community Growth Strategy', level: 85 },
  { name: 'Event Operations', level: 90 },
  { name: 'Public Speaking', level: 80 },
  { name: 'English & Bahasa Indonesia', level: 95 },
];

// ===== EVENTS DATA (from lu.ma/user/Yudhatama) =====
const hostedEvents = [
  // 2026
  { title: 'Yogyakarta Onchain Workshop: A Beginner\'s Guide', date: 'Mar 13, 2026', partner: 'MaxOne Hotels', cat: 'Workshop' },
  { title: 'MetaMask Community Builder Night: Jogja Edition', date: 'Feb 15, 2026', partner: 'MetaMask Indonesia', cat: 'Meetup' },
  { title: 'Build on Bittensor Yogyakarta Workshop', date: 'Feb 14, 2026', partner: 'HackQuest × Dev Web3 Jogja', cat: 'Workshop' },
  { title: 'Sui Dev Workshop Yogyakarta Batch 2 (Day 2)', date: 'Jan 31, 2026', partner: 'Sui Hub ID', cat: 'Workshop' },
  { title: 'Sui Dev Workshop Yogyakarta Batch 2 (Day 1)', date: 'Jan 30, 2026', partner: 'Sui Hub ID', cat: 'Workshop' },
  { title: 'BYBIT × CryptoIndo Jogja: Crypto Evolution 2026', date: 'Jan 24, 2026', partner: 'Bybit', cat: 'Conference' },
  // 2025
  { title: 'HIBT Community Meetup: New Year Special', date: 'Dec 18, 2025', partner: 'HIBT', cat: 'Meetup' },
  { title: 'MANCER Community Meetup: Chapter Jogja', date: 'Dec 12, 2025', partner: 'Mancer', cat: 'Meetup' },
  { title: 'Arbitrum Road to Campus – UGM', date: 'Dec 12, 2025', partner: 'Arbitrum', cat: 'Roadshow' },
  { title: 'Arbitrum Road to Campus – UNY', date: 'Dec 11, 2025', partner: 'Arbitrum', cat: 'Roadshow' },
  { title: 'Sui Dev Workshop Yogyakarta Batch 1 (Day 2)', date: 'Dec 1, 2025', partner: 'Sui Hub ID', cat: 'Workshop' },
  { title: 'Sui Dev Workshop Yogyakarta Batch 1 (Day 1)', date: 'Nov 30, 2025', partner: 'Sui Hub ID', cat: 'Workshop' },
  { title: 'WFA Friday: Web3 Weekly Meetup #40', date: 'Nov 21, 2025', partner: 'WFA Indonesia', cat: 'Meetup' },
  { title: 'WFA Friday: Web3 Weekly Meetup #39', date: 'Nov 14, 2025', partner: 'WFA Indonesia', cat: 'Meetup' },
  { title: 'WFA Friday: Web3 Weekly Meetup #38', date: 'Nov 7, 2025', partner: 'WFA Indonesia', cat: 'Meetup' },
  { title: 'WFA Friday: Web3 Weekly Meetup #37', date: 'Oct 31, 2025', partner: 'WFA Indonesia', cat: 'Meetup' },
  { title: 'WFA Friday: Web3 Weekly Meetup #36', date: 'Oct 24, 2025', partner: 'WFA Indonesia', cat: 'Meetup' },
  { title: 'WFA Friday: Web3 Weekly Meetup #35', date: 'Oct 17, 2025', partner: 'WFA Indonesia', cat: 'Meetup' },
  { title: 'Dev Web3 Jogja × Belajar DeFi Workshop', date: 'Oct 10, 2025', partner: 'Belajar DeFi', cat: 'Workshop' },
  { title: 'WFA Friday: Web3 Weekly Meetup #34', date: 'Oct 3, 2025', partner: 'WFA Indonesia', cat: 'Meetup' },
  { title: 'WFA Friday: Web3 Weekly Meetup #33', date: 'Sep 26, 2025', partner: 'WFA Indonesia', cat: 'Meetup' },
  { title: 'DeFi Nusantara Jogja: Chapter 3', date: 'Sep 20, 2025', partner: 'Nusa Finance', cat: 'Workshop' },
  { title: 'WFA Friday: Web3 Weekly Meetup #32', date: 'Sep 12, 2025', partner: 'WFA Indonesia', cat: 'Meetup' },
  { title: 'Noble × CryptoIndo Jogja Gathering', date: 'Aug 29, 2025', partner: 'Noble USDN', cat: 'Meetup' },
  { title: 'DeFi Nusantara Jogja: Chapter 2', date: 'Aug 16, 2025', partner: 'Nusa Finance', cat: 'Workshop' },
  { title: 'Tanssi Network Indonesia Builder Night', date: 'Apr 25, 2025', partner: 'Tanssi Network', cat: 'Meetup' },
  { title: 'DeFi Nusantara Jogja: Chapter 1', date: 'Mar 22, 2025', partner: 'Nusa Finance', cat: 'Workshop' },
  // 2024
  { title: 'Mantle Indonesia Offline Community Meet Up', date: 'Dec 14, 2024', partner: 'Mantle Network', cat: 'Meetup' },
  { title: 'Sui Community Meetup Yogyakarta', date: 'Nov 29, 2024', partner: 'Sui Hub ID', cat: 'Meetup' },
  { title: 'Kommunitas × CryptoIndo Jogja Gathering', date: 'Nov 22, 2024', partner: 'Kommunitas', cat: 'Meetup' },
  { title: 'J.U.P is HOME: Meme Everyday', date: 'Nov 13, 2024', partner: 'Jupiter (JUP)', cat: 'Meetup' },
  { title: 'Symbiosis Finance Community Night', date: 'Oct 25, 2024', partner: 'Symbiosis Finance', cat: 'Meetup' },
  { title: 'Oasis Goes To Jogja', date: 'Sep 28, 2024', partner: 'Oasis Network', cat: 'Roadshow' },
  { title: 'Roadshow Reku dan Tether Jogja Event', date: 'Sep 21, 2024', partner: 'Reku × Tether', cat: 'Roadshow' },
  { title: 'WFA Friday: Web3 Weekly Meetup #20', date: 'Sep 13, 2024', partner: 'WFA Indonesia', cat: 'Meetup' },
  { title: 'WFA Friday: Web3 Weekly Meetup #19', date: 'Sep 6, 2024', partner: 'WFA Indonesia', cat: 'Meetup' },
  { title: 'CryptoIndo Jogja Mega Gathering Agustus', date: 'Aug 31, 2024', partner: 'CryptoIndo Jogja', cat: 'Meetup' },
  { title: 'U2U Network Roadshow Kickoff Jogja (Day 3)', date: 'Jul 27, 2024', partner: 'U2U Network', cat: 'Roadshow' },
  { title: 'U2U Network Roadshow Kickoff Jogja (Day 2)', date: 'Jul 26, 2024', partner: 'U2U Network', cat: 'Roadshow' },
  { title: 'U2U Network Roadshow Kickoff Jogja (Day 1)', date: 'Jul 25, 2024', partner: 'U2U Network', cat: 'Roadshow' },
  { title: 'WFA Friday: Web3 Weekly Meetup #10', date: 'Jul 5, 2024', partner: 'WFA Indonesia', cat: 'Meetup' },
  { title: 'CryptoIndo Jogja × Moongate Gathering', date: 'Jun 28, 2024', partner: 'Moongate', cat: 'Meetup' },
  { title: 'WFA Friday: Web3 Weekly Meetup #5', date: 'May 31, 2024', partner: 'WFA Indonesia', cat: 'Meetup' },
  { title: 'CryptoIndo Jogja: Blockchain 101 Workshop', date: 'May 11, 2024', partner: 'CryptoIndo Jogja', cat: 'Workshop' },
  { title: 'CryptoIndo Jogja Community Night #1', date: 'Apr 26, 2024', partner: 'CryptoIndo Jogja', cat: 'Meetup' },
  { title: 'WFA Friday: Web3 Weekly Meetup #1', date: 'Mar 1, 2024', partner: 'WFA Indonesia', cat: 'Meetup' },
];

// ===== FLAGS SVG =====
const flagID = `<svg width="20" height="14" viewBox="0 0 20 14" style="border-radius:2px;overflow:hidden;box-shadow:0 0 2px rgba(0,0,0,0.3)"><rect width="20" height="7" fill="#FF0000"/><rect y="7" width="20" height="7" fill="#FFFFFF"/></svg>`;
const flagEN = `<svg width="20" height="14" viewBox="0 0 20 14" style="border-radius:2px;overflow:hidden;box-shadow:0 0 2px rgba(0,0,0,0.3)"><rect width="20" height="14" fill="#012169"/><path d="M0,0 L20,14 M20,0 L0,14" stroke="#fff" stroke-width="2.5"/><path d="M0,0 L20,14 M20,0 L0,14" stroke="#C8102E" stroke-width="1.5"/><rect x="8" width="4" height="14" fill="#fff"/><rect y="5" width="20" height="4" fill="#fff"/><rect x="9" width="2" height="14" fill="#C8102E"/><rect y="6" width="20" height="2" fill="#C8102E"/></svg>`;

// ===== BUILD EXPERIENCE HTML =====
function buildExpHTML(cl) {
  return experiences.map((exp, i) => {
    const tasks = cl === 'id' ? exp.id : exp.en;
    const side = i % 2 === 0 ? 'left' : 'right';
    const statusClass = exp.active ? 'active' : 'completed';
    return `
      <div class="timeline-item ${side} fade-up" style="transition-delay: ${Math.min(i * 60, 400)}ms;">
        <div class="timeline-node ${statusClass}">
          <span class="node-icon">${exp.icon}</span>
          ${exp.active ? '<span class="node-pulse"></span>' : ''}
        </div>
        <div class="timeline-card cyber-card">
          <div class="tc-header">
            <div class="tc-title">
              <span class="tc-company">${exp.co}</span>
              <h4>${exp.role}</h4>
            </div>
            <div class="tc-meta">
              <span class="tc-type ${statusClass}">${exp.type}</span>
              <span class="tc-period">${exp.active ? '<span class="live-dot"></span>' : ''}${exp.period}</span>
            </div>
          </div>
          <ul class="tc-tasks">${tasks.map(t => `<li><span class="task-arrow">›</span> ${t}</li>`).join('')}</ul>
          <div class="tc-footer">
            <span class="tc-id">EXP_${String(i + 1).padStart(3, '0')}</span>
            ${exp.active ? '<span class="tc-status active">● ACTIVE</span>' : '<span class="tc-status">○ COMPLETED</span>'}
          </div>
        </div>
      </div>`;
  }).join('');
}

// ===== BUILD PROJECTS (INNOVATION CHAIN) HTML =====
function buildProjectsHTML(cl) {
  return projects.map((p, i) => {
    const desc = cl === 'id' ? p.id : p.en;
    const statusBadge = p.status === 'building' ? '<span class="proj-status building"><span class="status-dot pulse"></span> BUILDING</span>'
      : p.status === 'winner' ? '<span class="proj-status winner"><span class="status-dot winner-dot"></span> WINNER</span>'
      : p.status === 'active' ? '<span class="proj-status active"><span class="status-dot active-dot"></span> ACTIVE</span>'
      : '<span class="proj-status"><span class="status-dot"></span> COMPLETED</span>';
    return `
    <div class="proj-card fade-up" style="transition-delay: ${i * 100}ms; --proj-color: ${p.color}">
      <div class="proj-connector">
        <div class="proj-node" style="--nc2:${p.color}">
          <span class="proj-icon">${p.icon}</span>
          <div class="proj-ring"></div>
        </div>
        <div class="proj-wire"></div>
      </div>
      <div class="proj-body">
        <div class="proj-glow" style="background:radial-gradient(circle at top left,${p.color}15,transparent 60%)"></div>
        <div class="proj-header">
          <div>
            <span class="proj-year-badge" style="color:${p.color};border-color:${p.color}40">${p.year}</span>
            <h4 class="proj-name">${p.name}</h4>
          </div>
          ${statusBadge}
        </div>
        <p class="proj-desc">${desc}</p>
        <div class="proj-accent" style="background:linear-gradient(90deg,${p.color},${p.color}20,transparent)"></div>
      </div>
    </div>`;
  }).join('');
}

// ===== BUILD SKILLS HTML =====
function buildSkillsHTML() {
  return skills.map((s, i) => `
    <div class="skill-item fade-up" style="transition-delay: ${i * 60}ms;">
      <div class="skill-header">
        <span class="skill-name">${s.name}</span>
        <span class="skill-pct">${s.level}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-fill" style="--fill-width: ${s.level}%"></div>
      </div>
    </div>
  `).join('');
}

// ===== BUILD EVENTS HTML =====
function buildEventsHTML(cl) {
  const t = lang[cl];
  const byYear = {};
  hostedEvents.forEach(e => {
    const y = e.date.split(', ')[1];
    if (!byYear[y]) byYear[y] = [];
    byYear[y].push(e);
  });
  const cats = {};
  hostedEvents.forEach(e => { cats[e.cat] = (cats[e.cat] || 0) + 1; });
  const catIcons = {Workshop:'🔧',Meetup:'🤝',Roadshow:'🚀',Conference:'🎪'};
  const catHTML = Object.entries(cats).sort((a,b) => b[1]-a[1]).map(([k,v]) => `<div class="evt-cat-pill"><span class="evt-cat-icon">${catIcons[k]||'📌'}</span><span class="evt-cat-count">${v}</span><span class="evt-cat-name">${k}${v > 1 ? 's' : ''}</span></div>`).join('');

  let yearHTML = '';
  Object.keys(byYear).sort((a,b)=>b-a).forEach(year => {
    const evts = byYear[year];
    yearHTML += `<div class="evt-year-group fade-up">
      <div class="evt-year-label">
        <div class="evt-year-badge"><span class="evt-year">${year}</span></div>
        <div class="evt-year-line"></div>
        <span class="evt-year-count">${evts.length} events</span>
      </div>
      <div class="evt-grid">${evts.map((e,j) => `
        <div class="evt-card" style="transition-delay:${Math.min(j*40,300)}ms">
          <div class="evt-card-glow"></div>
          <div class="evt-card-top">
            <span class="evt-date"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> ${e.date.split(', ')[0]}</span>
            <span class="evt-badge ${e.cat.toLowerCase()}">${e.cat}</span>
          </div>
          <h4 class="evt-title">${e.title}</h4>
          <div class="evt-partner-row"><span class="evt-partner-dot"></span><span class="evt-partner">${e.partner}</span></div>
        </div>`).join('')}
      </div>
    </div>`;
  });

  return `
    <div class="evt-stats fade-up">
      <div class="evt-stat-card cyber-card">
        <div class="evt-stat-num">46<span class="evt-plus">+</span></div>
        <div class="evt-stat-lbl">${t.evtHosted}</div>
        <div class="evt-stat-icon">🎤</div>
      </div>
      <div class="evt-stat-card cyber-card">
        <div class="evt-stat-num">181<span class="evt-plus">+</span></div>
        <div class="evt-stat-lbl">${t.evtAttended}</div>
        <div class="evt-stat-icon">🎯</div>
      </div>
      <div class="evt-stat-card cyber-card">
        <div class="evt-stat-num">15<span class="evt-plus">+</span></div>
        <div class="evt-stat-lbl">${t.evtPartners}</div>
        <div class="evt-stat-icon">🤝</div>
      </div>
    </div>
    <div class="evt-cats fade-up">${catHTML}</div>
    ${yearHTML}
    <div class="evt-cta fade-up">
      <a href="https://lu.ma/user/Yudhatama" target="_blank" class="btn cyber-btn-primary"><span class="btn-content"><span>${t.evtSeeAll}</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></span></a>
    </div>`;
}

// ===== RENDER PAGE =====
function renderPage(cl) {
  const t = lang[cl];

  document.querySelector('#app').innerHTML = `
  <div class="cyber-bg">
    <div class="grid-overlay"></div>
    <div class="scan-line"></div>
    <div class="glow-orb orb-1"></div>
    <div class="glow-orb orb-2"></div>
    <div class="glow-orb orb-3"></div>
    <div class="glow-orb orb-4"></div>
    <div class="particle-field" id="particles"></div>
  </div>

  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <div class="logo"><span class="logo-b">&lt;</span>YUDHATAMA<span class="logo-b">/&gt;</span></div>
      <ul class="nav-links" id="nav-links">
        <li><a href="#home" class="nav-link">${t.navHome}</a></li>
        <li><a href="#about" class="nav-link">${t.navAbout}</a></li>
        <li><a href="#experience" class="nav-link">${t.navExp}</a></li>
        <li><a href="#skills" class="nav-link">${t.navSkills}</a></li>
        <li><a href="#projects" class="nav-link">${t.navProjects}</a></li>
        <li><a href="#events" class="nav-link">${t.navEvents}</a></li>
        <li><a href="#contact" class="nav-link">${t.navContact}</a></li>
      </ul>
      <div class="nav-ctrls">
        <button class="ctrl-btn" id="theme-toggle" aria-label="Toggle theme">
          <svg class="icon-sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          <svg class="icon-moon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
        <button class="ctrl-btn lang-btn" id="lang-toggle" aria-label="Toggle language">
          ${cl === 'id' ? flagID : flagEN}
          <span class="lang-code">${cl.toUpperCase()}</span>
        </button>
        <button class="menu-btn" id="menu-btn" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>

  <main>
    <section id="home" class="hero section">
      <div class="hero-content fade-up">
        <div class="cyber-badge"><span class="pulse-dot"></span><span class="badge-text">WEB3 COMMUNITY MANAGER</span><span class="badge-line"></span></div>
        <h2 class="subtitle glitch-subtle">${t.heroWelcome}</h2>
        <h1 class="title"><span class="title-line">YUDHA</span><span class="title-line accent">TAMA<span class="blink-cursor">_</span></span></h1>
        <p class="description">${t.heroDesc}</p>
        <div class="hero-actions">
          <a href="#experience" class="btn cyber-btn-primary"><span class="btn-content"><span>${t.heroBtn1}</span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span></a>
          <a href="#contact" class="btn cyber-btn-outline"><span>${t.heroBtn2}</span></a>
        </div>
      </div>
      <div class="hero-image-container fade-up" style="transition-delay: 200ms;">
        <div class="cyber-frame">
          <div class="frame-corner tl"></div><div class="frame-corner tr"></div><div class="frame-corner bl"></div><div class="frame-corner br"></div>
          <div class="frame-scanline"></div>
          <div class="avatar-wrapper">
            <img src="/profile_pic_fixed.png" alt="YUDHA TAMA" class="hero-avatar" />
          </div>
          <div class="frame-hud"><span class="hud-text">ID: YUDHA TAMA</span><span class="hud-text">STATUS: <span style="color:var(--ng)">ONLINE</span></span></div>
        </div>
        <div class="floating-tag tag-1"><span class="tag-i">⬡</span> Web3</div>
        <div class="floating-tag tag-2"><span class="tag-i">◈</span> DeFi</div>
        <div class="floating-tag tag-3"><span class="tag-i">⬢</span> DAO</div>
        <div class="floating-tag tag-4"><span class="tag-i">◇</span> Web3 Community Manager</div>
      </div>
    </section>

    <section id="about" class="section">
      <div class="section-header fade-up"><span class="section-tag">&lt;about&gt;</span><h2>${t.aboutTitle} <span class="accent">.</span>ME</h2><div class="cyber-line"></div></div>
      <div class="about-content">
        <div class="about-text cyber-card fade-up">
          <div class="card-hdr"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span><span class="card-t">summary.md</span></div>
          <h3>${t.aboutSummaryTitle}</h3>
          <p>${t.aboutSummary1}</p>
          <p style="margin-top:1rem;">${t.aboutSummary2}</p>
        </div>
        <div class="about-stats fade-up" style="transition-delay:150ms;">
          <div class="stat-card cyber-card"><div class="stat-num">4+</div><div class="stat-lbl">YEARS<br/>EXP</div><div class="stat-bar"><div class="stat-fill" style="width:80%"></div></div></div>
          <div class="stat-card cyber-card"><div class="stat-num">227+</div><div class="stat-lbl">EVENTS<br/>TOTAL</div><div class="stat-bar"><div class="stat-fill" style="width:98%"></div></div></div>
          <div class="stat-card cyber-card"><div class="stat-num">5+</div><div class="stat-lbl">ACTIVE<br/>NOW</div><div class="stat-bar"><div class="stat-fill" style="width:70%"></div></div></div>
        </div>
      </div>
    </section>

    <section id="experience" class="section exp-section">
      <div class="section-header fade-up"><span class="section-tag">&lt;experience&gt;</span><h2>${t.expTitle} <span class="accent">.</span>LOG</h2><div class="cyber-line"></div></div>
      <div class="timeline">${buildExpHTML(cl)}</div>
      <div class="section-header fade-up" style="margin-top:5rem;"><span class="section-tag">&lt;education&gt;</span><h2>${t.eduTitle}</h2><div class="cyber-line"></div></div>
      <div class="edu-card cyber-card fade-up">
        <div class="edu-row"><div><h4>Universitas Negeri Yogyakarta</h4><p class="edu-deg">${t.eduDegree}</p></div><div class="edu-meta"><span class="tc-period">2018 – 2023</span><span class="edu-gpa">GPA: 3.27</span></div></div>
      </div>
    </section>

    <section id="skills" class="section">
      <div class="section-header fade-up"><span class="section-tag">&lt;skills&gt;</span><h2>${t.skillsTitle} <span class="accent">.</span>SET</h2><div class="cyber-line"></div></div>
      <div class="skills-list">${buildSkillsHTML()}</div>
    </section>

    <section id="projects" class="section projects-section">
      <div class="section-header fade-up"><span class="section-tag">&lt;projects&gt;</span><h2>${t.projectsTitle}</h2><div class="cyber-line"></div></div>
      <p class="proj-subtitle fade-up" style="text-align:center;margin-bottom:3rem;max-width:700px;margin-left:auto;margin-right:auto;">2024 – 2026</p>
      <div class="proj-timeline">${buildProjectsHTML(cl)}</div>
    </section>

    <section id="events" class="section events-section">
      <div class="section-header fade-up"><span class="section-tag">&lt;events&gt;</span><h2>${t.eventsTitle} <span class="accent">.</span>LOG</h2><div class="cyber-line"></div></div>
      ${buildEventsHTML(cl)}
    </section>

    <section id="contact" class="section">
      <div class="section-header fade-up"><span class="section-tag">&lt;contact&gt;</span><h2>${t.contactTitle}</h2><div class="cyber-line"></div></div>
      <div class="contact-container cyber-card fade-up">
        <div class="contact-info">
          <h3>${t.contactSub}</h3><p>${t.contactDesc}</p>
          <div class="contact-methods">
            <a href="mailto:yudhamardatama@gmail.com" class="method" style="text-decoration:none;color:inherit"><div class="m-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div><div class="m-txt"><span class="m-lbl">EMAIL</span><span class="m-val">yudhamardatama@gmail.com</span></div></a>
            <a href="https://t.me/yudhatamanew" target="_blank" class="method" style="text-decoration:none;color:inherit"><div class="m-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.5 6.75a2.25 2.25 0 0 0 .126 4.237l3.555 1.153 1.828 5.498a1.125 1.125 0 0 0 1.946.37l2.286-2.676 4.242 3.24a2.25 2.25 0 0 0 3.501-1.434l2.7-16.5a2.25 2.25 0 0 0-2.662-2.853z"/></svg></div><div class="m-txt"><span class="m-lbl">TELEGRAM</span><span class="m-val">@yudhatamanew</span></div></a>
            <div class="method"><div class="m-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div><div class="m-txt"><span class="m-lbl">LOCATION</span><span class="m-val">Yogyakarta, Indonesia</span></div></div>
          </div>
        </div>
        <form class="contact-form" id="contact-form">
          <div class="c-input"><input type="text" id="name" required placeholder=" "/><label for="name">YOUR_NAME</label></div>
          <div class="c-input"><input type="email" id="email" required placeholder=" "/><label for="email">YOUR_EMAIL</label></div>
          <div class="c-input"><textarea id="message" rows="4" required placeholder=" "></textarea><label for="message">YOUR_MESSAGE</label></div>
          <button type="submit" class="btn cyber-btn-primary submit-btn"><span class="btn-content"><span>${t.contactBtn}</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></span></button>
        </form>
      </div>
    </section>
  </main>

  <footer class="footer"><div class="footer-content">
    <div class="logo"><span class="logo-b">&lt;</span>YUDHATAMA<span class="logo-b">/&gt;</span></div>
    <div class="social-links">
      <a href="https://www.linkedin.com/in/yudha-marda-pratama-77a693226/" target="_blank" class="social-btn" title="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
      <a href="https://x.com/Ytama99" target="_blank" class="social-btn" title="X (Twitter)"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.852L2.12 2.25H8.08l4.264 5.637 5.9-5.637zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
      <a href="https://www.instagram.com/yudhatamanew/" target="_blank" class="social-btn" title="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
      <a href="https://github.com/Yudhatama45" target="_blank" class="social-btn" title="GitHub"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg></a>
      <a href="https://t.me/yudhatamanew" target="_blank" class="social-btn" title="Telegram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.5 6.75a2.25 2.25 0 0 0 .126 4.237l3.555 1.153 1.828 5.498a1.125 1.125 0 0 0 1.946.37l2.286-2.676 4.242 3.24a2.25 2.25 0 0 0 3.501-1.434l2.7-16.5a2.25 2.25 0 0 0-2.662-2.853z"/></svg></a>
      <a href="mailto:yudhamardatama@gmail.com" class="social-btn" title="Email"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></a>
    </div>
    <p class="footer-text">&copy; 2026 YUDHA TAMA <span class="sep">//</span> ${t.footerText}</p>
  </div></footer>`;

  initApp(cl);
}

function initApp(cl) {
  const t = lang[cl];
  // Particles
  const pf = document.getElementById('particles');
  if (pf) for (let i = 0; i < 40; i++) { const p = document.createElement('div'); p.className='particle'; p.style.left=Math.random()*100+'%'; p.style.top=Math.random()*100+'%'; const s=Math.random()*3+1; p.style.width=s+'px'; p.style.height=s+'px'; p.style.animationDelay=Math.random()*8+'s'; p.style.animationDuration=(Math.random()*10+5)+'s'; pf.appendChild(p); }

  // Mobile Menu
  const mb = document.getElementById('menu-btn'), nl = document.getElementById('nav-links');
  mb.addEventListener('click', () => { mb.classList.toggle('active'); nl.classList.toggle('active'); });
  nl.querySelectorAll('a').forEach(l => l.addEventListener('click', () => { mb.classList.remove('active'); nl.classList.remove('active'); }));

  // Scroll Observer
  const obs = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }), { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

  // Navbar scroll
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 50));

  // Glitch
  const gl = document.querySelector('.glitch-subtle');
  if (gl) setInterval(() => { gl.classList.add('glitch-active'); setTimeout(() => gl.classList.remove('glitch-active'), 200); }, 5000);

  // Theme Toggle
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const light = document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', light ? 'light' : 'dark');
  });

  // Lang Toggle
  document.getElementById('lang-toggle').addEventListener('click', () => {
    const nxt = cl === 'id' ? 'en' : 'id';
    localStorage.setItem('lang', nxt);
    const sy = window.scrollY;
    renderPage(nxt);
    window.scrollTo(0, sy);
    if (localStorage.getItem('theme') === 'light') document.body.classList.add('light-mode');
  });

  // Form
  const form = document.getElementById('contact-form');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]'), orig = btn.innerHTML;
    btn.innerHTML = `<span class="btn-content"><span>${t.sending}</span></span>`; btn.style.opacity = 0.7;
    setTimeout(() => {
      btn.innerHTML = `<span class="btn-content"><span style="color:var(--neon-green)">${t.sent}</span></span>`; btn.style.opacity = 1; e.target.reset();
      setTimeout(() => { btn.innerHTML = orig; }, 3000);
    }, 1500);
  });
}

// ===== CYBERPUNK LOADING SCREEN — ULTIMATE EDITION =====
function showLoadingScreen() {
  const loader = document.createElement('div');
  loader.id = 'cyber-loader';
  loader.innerHTML = `
    <canvas id="matrix-rain" class="matrix-canvas"></canvas>
    <div class="loader-bg">
      <div class="loader-grid"></div>
      <div class="loader-scanline"></div>
      <div class="loader-scanline s2"></div>
      <div class="circuit-traces">
        <svg class="circuit-svg" viewBox="0 0 800 600" preserveAspectRatio="none">
          <path class="circuit-path c1" d="M0,100 H200 L220,120 H400 L420,100 H600" />
          <path class="circuit-path c2" d="M800,200 H600 L580,220 H350 L330,200 H100" />
          <path class="circuit-path c3" d="M0,400 H150 L170,380 H500 L520,400 H800" />
          <path class="circuit-path c4" d="M400,0 V150 L420,170 V300 L400,320 V600" />
          <path class="circuit-path c5" d="M200,0 V80 L220,100 V200 L200,220 V350" />
          <path class="circuit-path c6" d="M600,600 V450 L580,430 V300 L600,280 V0" />
          <circle class="circuit-node cn1" cx="200" cy="100" r="3" />
          <circle class="circuit-node cn2" cx="600" cy="200" r="3" />
          <circle class="circuit-node cn3" cx="400" cy="300" r="3" />
          <circle class="circuit-node cn4" cx="150" cy="400" r="3" />
          <circle class="circuit-node cn5" cx="420" cy="170" r="3" />
        </svg>
      </div>
      <div class="electric-arcs">
        <div class="arc arc-1"></div>
        <div class="arc arc-2"></div>
        <div class="arc arc-3"></div>
      </div>
      <div class="holo-flicker"></div>
    </div>
    <div class="loader-content">
      <div class="loader-hex-system">
        <div class="hex-ring hex-ring-outer">
          <svg viewBox="0 0 120 120" width="120" height="120">
            <polygon points="60,2 112,30 112,90 60,118 8,90 8,30" fill="none" stroke="url(#hexGrad)" stroke-width="1" class="hex-outer" />
            <defs><linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#a855f7"/><stop offset="50%" stop-color="#06b6d4"/><stop offset="100%" stop-color="#ec4899"/></linearGradient></defs>
          </svg>
        </div>
        <div class="hex-ring hex-ring-mid">
          <svg viewBox="0 0 90 90" width="90" height="90">
            <polygon points="45,3 84,24 84,66 45,87 6,66 6,24" fill="none" stroke="rgba(168,85,247,0.4)" stroke-width="0.8" class="hex-mid" />
          </svg>
        </div>
        <div class="hex-ring hex-ring-inner">
          <svg viewBox="0 0 60 60" width="60" height="60">
            <polygon points="30,3 56,17 56,43 30,57 4,43 4,17" fill="none" stroke="rgba(6,182,212,0.6)" stroke-width="0.6" class="hex-inner-poly" />
          </svg>
        </div>
        <div class="hex-core-pulse"></div>
        <div class="hex-data-ring" id="hex-data-ring"></div>
      </div>
      <div class="loader-name-container">
        <div class="loader-name-glitch" id="loader-name-glitch">
          <span class="loader-name-main" id="loader-name-main">YUDHA TAMA</span>
          <span class="loader-name-ghost g1" aria-hidden="true">YUDHA TAMA</span>
          <span class="loader-name-ghost g2" aria-hidden="true">YUDHA TAMA</span>
        </div>
        <div class="loader-tagline">
          <span class="tag-bracket">[</span>
          <span class="loader-role" id="loader-role"></span>
          <span class="loader-cursor-blink">█</span>
          <span class="tag-bracket">]</span>
        </div>
      </div>
      <div class="loader-terminal" id="loader-terminal">
        <div class="terminal-line" id="term-line"></div>
      </div>
      <div class="loader-progress-system">
        <div class="progress-label">
          <span class="progress-tag">SYS.BOOT</span>
          <span class="progress-segments" id="progress-segments">
            <span class="seg"></span><span class="seg"></span><span class="seg"></span><span class="seg"></span><span class="seg"></span>
            <span class="seg"></span><span class="seg"></span><span class="seg"></span><span class="seg"></span><span class="seg"></span>
          </span>
          <span class="progress-pct" id="loader-pct">000</span>
        </div>
        <div class="progress-bar-wrapper">
          <div class="progress-bar">
            <div class="progress-fill" id="loader-fill">
              <div class="progress-glow"></div>
              <div class="progress-data-stream"></div>
            </div>
            <div class="progress-corruption" id="progress-corruption"></div>
          </div>
          <div class="progress-ticks">
            ${Array.from({length:20},(_,i)=>`<span class="tick" style="left:${i*5}%"></span>`).join('')}
          </div>
        </div>
        <div class="progress-status-row">
          <span class="status-indicator" id="status-indicator">◆</span>
          <span class="loader-status" id="loader-status">CONNECTING TO MAINFRAME...</span>
        </div>
      </div>
      <div class="loader-data-readout">
        <span class="data-item" id="data-mem">MEM: ████░░ 67%</span>
        <span class="data-sep">│</span>
        <span class="data-item" id="data-cpu">CPU: ██████ 94%</span>
        <span class="data-sep">│</span>
        <span class="data-item" id="data-net">NET: ███░░░ 52%</span>
      </div>
    </div>
  `;
  document.body.appendChild(loader);
  document.body.style.overflow = 'hidden';

  // === Matrix Rain on Canvas ===
  const canvas = document.getElementById('matrix-rain');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const matrixChars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF{}[]<>=/\\|@#$%&';
  const fontSize = 12;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(1);

  function drawMatrix() {
    ctx.fillStyle = 'rgba(3,0,20,0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = fontSize + 'px monospace';
    for (let i = 0; i < drops.length; i++) {
      const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;
      // Random colors: purple, cyan, pink
      const colors = ['rgba(168,85,247,0.7)', 'rgba(6,182,212,0.5)', 'rgba(236,72,153,0.4)'];
      ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
      ctx.fillText(char, x, y);
      if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }
  const matrixInterval = setInterval(drawMatrix, 45);

  // === Name Scramble Effect ===
  const nameEl = document.getElementById('loader-name-main');
  const targetName = 'YUDHA TAMA';
  const scrambleChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let nameRevealed = Array(targetName.length).fill(false);
  let scrambleFrame = 0;

  function scrambleName() {
    let result = '';
    for (let i = 0; i < targetName.length; i++) {
      if (targetName[i] === ' ') { result += ' '; continue; }
      if (nameRevealed[i]) { result += targetName[i]; continue; }
      result += scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
    }
    nameEl.textContent = result;
    // Also update ghost layers
    document.querySelectorAll('.loader-name-ghost').forEach(g => g.textContent = result);
    scrambleFrame++;
    if (scrambleFrame > 8) {
      const unrevealed = nameRevealed.map((v, i) => v || targetName[i] === ' ' ? -1 : i).filter(i => i >= 0);
      if (unrevealed.length > 0) {
        const idx = unrevealed[Math.floor(Math.random() * unrevealed.length)];
        nameRevealed[idx] = true;
      }
    }
    if (!nameRevealed.every((v, i) => v || targetName[i] === ' ')) {
      requestAnimationFrame(scrambleName);
    } else {
      nameEl.textContent = targetName;
      document.querySelectorAll('.loader-name-ghost').forEach(g => g.textContent = targetName);
    }
  }
  setTimeout(scrambleName, 300);

  // === Typewriter Role Text ===
  const roleEl = document.getElementById('loader-role');
  const roles = ['WEB3 COMMUNITY MANAGER', 'ECOSYSTEM BUILDER', 'BLOCKCHAIN AMBASSADOR'];
  let roleIdx = 0, roleCharIdx = 0, roleTyping = true;
  function typeRole() {
    const current = roles[roleIdx];
    if (roleTyping) {
      roleEl.textContent = current.slice(0, roleCharIdx + 1);
      roleCharIdx++;
      if (roleCharIdx >= current.length) {
        roleTyping = false;
        setTimeout(typeRole, 1200);
        return;
      }
      setTimeout(typeRole, 40 + Math.random() * 30);
    } else {
      roleEl.textContent = current.slice(0, roleCharIdx);
      roleCharIdx--;
      if (roleCharIdx <= 0) {
        roleTyping = true;
        roleIdx = (roleIdx + 1) % roles.length;
        setTimeout(typeRole, 300);
        return;
      }
      setTimeout(typeRole, 20);
    }
  }
  setTimeout(typeRole, 800);

  // === Terminal Log ===
  const termLine = document.getElementById('term-line');
  const termLogs = [
    '> Establishing secure connection...',
    '> Handshake protocol: OK',
    '> Loading neural interface assets...',
    '> Decrypting blockchain profiles...',
    '> Compiling experience matrix...',
    '> Rendering holographic UI...',
    '> Calibrating visual cortex...',
    '> All subsystems nominal.',
    '> BOOT SEQUENCE COMPLETE ✓',
  ];
  let termIdx = 0;
  function advanceTerm() {
    if (termIdx < termLogs.length) {
      termLine.textContent = termLogs[termIdx];
      termLine.classList.remove('term-typed');
      void termLine.offsetWidth;
      termLine.classList.add('term-typed');
      termIdx++;
    }
  }

  // === Hex Data Ring ===
  const hexDataRing = document.getElementById('hex-data-ring');
  for (let i = 0; i < 24; i++) {
    const dot = document.createElement('span');
    dot.className = 'hex-data-dot';
    dot.style.setProperty('--angle', (i * 15) + 'deg');
    dot.style.animationDelay = (i * 0.1) + 's';
    hexDataRing.appendChild(dot);
  }

  // === Data Readout Randomizer ===
  function randomBar(pct) {
    const filled = Math.round(pct / 16.66);
    return '█'.repeat(filled) + '░'.repeat(6 - filled);
  }
  function updateReadout() {
    const m = Math.floor(50 + Math.random() * 48);
    const c = Math.floor(70 + Math.random() * 30);
    const n = Math.floor(30 + Math.random() * 65);
    document.getElementById('data-mem').textContent = `MEM: ${randomBar(m)} ${m}%`;
    document.getElementById('data-cpu').textContent = `CPU: ${randomBar(c)} ${c}%`;
    document.getElementById('data-net').textContent = `NET: ${randomBar(n)} ${n}%`;
  }
  const readoutInterval = setInterval(updateReadout, 300);

  // === Corruption Glitch Effect ===
  function triggerCorruption() {
    const corr = document.getElementById('progress-corruption');
    corr.classList.add('active');
    setTimeout(() => corr.classList.remove('active'), 150);
  }

  // === Progress ===
  const fill = document.getElementById('loader-fill');
  const pctEl = document.getElementById('loader-pct');
  const statusEl = document.getElementById('loader-status');
  const statusInd = document.getElementById('status-indicator');
  const segments = document.querySelectorAll('.seg');
  const statuses = [
    { at: 0, txt: 'CONNECTING TO MAINFRAME...', color: '#a855f7' },
    { at: 10, txt: 'AUTHENTICATING NEURAL LINK...', color: '#7c3aed' },
    { at: 25, txt: 'LOADING BLOCKCHAIN NODES...', color: '#3b82f6' },
    { at: 40, txt: 'DECRYPTING PROFILE DATA...', color: '#06b6d4' },
    { at: 55, txt: 'COMPILING EXPERIENCE MATRIX...', color: '#22c55e' },
    { at: 70, txt: 'RENDERING HOLOGRAPHIC UI...', color: '#ec4899' },
    { at: 85, txt: 'CALIBRATING VISUAL CORTEX...', color: '#f59e0b' },
    { at: 95, txt: 'SYSTEM READY — WELCOME', color: '#22c55e' },
  ];

  let pct = 0;
  let lastTermAt = -1;
  const interval = setInterval(() => {
    pct += Math.random() * 2.5 + 0.8;
    if (pct >= 100) pct = 100;
    fill.style.width = pct + '%';
    pctEl.textContent = String(Math.floor(pct)).padStart(3, '0');

    // Segments
    const segFill = Math.floor(pct / 10);
    segments.forEach((s, i) => s.classList.toggle('filled', i < segFill));

    // Status
    const s = statuses.filter(s => s.at <= pct).pop();
    if (s) {
      statusEl.textContent = s.txt;
      statusInd.style.color = s.color;
    }

    // Terminal advancement
    const termAt = Math.floor(pct / 12);
    if (termAt > lastTermAt) { lastTermAt = termAt; advanceTerm(); }

    // Random corruption
    if (Math.random() < 0.08) triggerCorruption();

    // Random glitch on name
    if (Math.random() < 0.05) {
      const nameGlitch = document.getElementById('loader-name-glitch');
      nameGlitch.classList.add('glitch-active');
      setTimeout(() => nameGlitch.classList.remove('glitch-active'), 150);
    }

    if (pct >= 100) {
      clearInterval(interval);
      clearInterval(matrixInterval);
      clearInterval(readoutInterval);
      statusInd.textContent = '◆';
      statusInd.style.color = '#22c55e';
      setTimeout(() => {
        loader.classList.add('loader-exit');
        document.body.style.overflow = '';
        setTimeout(() => loader.remove(), 1000);
      }, 600);
    }
  }, 55);
}

// ===== INIT =====
showLoadingScreen();
const savedLang = localStorage.getItem('lang') || 'en';
renderPage(savedLang);
if (localStorage.getItem('theme') === 'light') document.body.classList.add('light-mode');
