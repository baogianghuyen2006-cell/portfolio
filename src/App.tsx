import { FormEvent, ReactNode } from 'react'

const imageUrl = (name: string) =>
  `${import.meta.env.BASE_URL}assets/${name}?v=${import.meta.env.VITE_ASSET_VERSION || 'local'}`
type IconName = 'home' | 'user' | 'skills' | 'projects' | 'education' | 'contact' | 'arrow' | 'code' | 'mail' | 'phone' | 'pin' | 'github' | 'linkedin' | 'facebook' | 'download'

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    home: <><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9M9 20v-6h6v6" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c.7-4.2 3.4-6 8-6s7.3 1.8 8 6" /></>,
    skills: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" /></>,
    projects: <><rect x="3" y="6" width="18" height="14" rx="2" /><path d="M8 6V4h8v2M3 11h18" /></>,
    education: <><path d="m2 9 10-5 10 5-10 5L2 9Z" /><path d="M6 11.5V17c3.6 2.7 8.4 2.7 12 0v-5.5M22 9v7" /></>,
    contact: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5" /></>,
    code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    phone: <path d="M6.5 3h3l1 5-2 1.5c1.2 2.7 3.3 4.8 6 6l1.5-2 5 1v3c0 2-1.7 3.5-3.7 3.3C9.8 20 4 14.2 3.2 6.7 3 4.7 4.5 3 6.5 3Z" />,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    github: <><path d="M9 19c-4.5 1.4-4.5-2.3-6-2.8M15 22v-3.5c0-1 .1-1.5-.5-2 3.2-.4 6.5-1.6 6.5-7A5.5 5.5 0 0 0 19.5 6 5 5 0 0 0 19.3 2S18.1 1.6 15 3.5a13.4 13.4 0 0 0-6 0C5.9 1.6 4.7 2 4.7 2A5 5 0 0 0 4.5 6 5.5 5.5 0 0 0 3 9.5c0 5.4 3.3 6.6 6.5 7-.6.5-.6 1.2-.5 2V22" /></>,
    linkedin: <><rect x="4" y="9" width="4" height="11" /><path d="M4 5.5h4M12 20v-7c0-2 1.2-4 4-4s4 2 4 5v6M12 9v11" /></>,
    facebook: <path d="M14 21v-8h3l.5-4H14V7c0-1.2.6-2 2.3-2H18V2.2c-.8-.1-1.7-.2-2.5-.2C12 2 10 4 10 7v2H7v4h3v8" />,
    download: <><path d="M12 3v12M7 10l5 5 5-5" /><path d="M4 20h16" /></>,
  }
  return <svg aria-hidden="true" className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}

const navItems: { id: string; label: string; icon: IconName }[] = [
  { id: 'home', label: 'Home', icon: 'home' }, { id: 'about', label: 'About', icon: 'user' },
  { id: 'skills', label: 'Skills', icon: 'skills' }, { id: 'projects', label: 'Projects', icon: 'projects' },
  { id: 'education', label: 'Edu', icon: 'education' }, { id: 'contact', label: 'Contact', icon: 'contact' },
]

const skills = [
  ['C / C++', '85%', 'Nền tảng tư duy cấu trúc dữ liệu, giải thuật và tối ưu bộ nhớ.'],
  ['Java', '90%', 'Lập trình hướng đối tượng, Java Spring Boot RESTful API.'],
  ['Python', '80%', 'Phân tích dữ liệu cơ bản, viết script tự động hóa và Machine Learning nhập môn.'],
  ['HTML5 & CSS3', '95%', 'Responsive layout, Flexbox, CSS Grid và animation.'],
  ['JavaScript (ES6+)', '88%', 'Thao tác DOM, xử lý bất đồng bộ và ReactJS cơ bản.'],
  ['Figma & UI/UX', '85%', 'Wireframe, prototype tương tác và thiết kế giao diện.'],
]

const projects = [
  { image: imageUrl('b5813.png'), eyebrow: 'Du lịch & Bản đồ số', title: 'Hạ Long Travel Guide', role: 'Frontend Developer & UI/UX Designer', copy: 'Cổng thông tin du lịch di sản với bản đồ địa điểm, tour, khách sạn và ẩm thực.', contribution: 'Thiết kế giao diện, tối ưu tương tác bản đồ và tích hợp API tìm kiếm.', tags: ['ReactJS', 'Tailwind CSS', 'Mapbox API', 'Node.js'] },
  { image: imageUrl('16c4b.png'), eyebrow: 'Web Identity', title: 'Modern Minimalist DevPortfolio', role: 'Creator', copy: 'Hồ sơ năng lực cá nhân tương tác cao, tối ưu SEO và thiết bị di động.', contribution: 'Wireframe, interactive prototype và triển khai Frontend thuần.', tags: ['HTML5', 'CSS3', 'JavaScript', 'Figma'] },
  { image: imageUrl('c36da.png'), eyebrow: 'Hệ thống & Quản trị', title: 'StudentHub', role: 'Backend Developer', copy: 'Quản lý sinh viên, điểm môn học, lịch thi, xếp loại và báo cáo.', contribution: 'Thiết kế cơ sở dữ liệu quan hệ, CRUD và phân quyền hệ thống.', tags: ['Java', 'Spring Boot', 'MySQL', 'Hibernate'] },
]

function SectionHeading({ kicker, title, description }: { kicker: string; title: string; description: string }) {
  return <header className="section-heading"><span className="eyebrow"><span className="eyebrow-dot" />{kicker}</span><h2>{title}</h2><p>{description}</p></header>
}

function App() {
  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const subject = `Portfolio: ${String(formData.get('subject'))}`
    const body = [
      `Họ tên: ${String(formData.get('name'))}`,
      `Email: ${String(formData.get('email'))}`,
      '',
      String(formData.get('message')),
    ].join('\n')

    window.location.href = `mailto:bao2006@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home"><img src={imageUrl('1f92d.png')} alt="" /><span><strong>Nguyễn Sỹ Bảo</strong><small>IT PORTFOLIO</small></span></a>
        <nav className="desktop-nav" aria-label="Điều hướng chính">{navItems.map(item => <a href={`#${item.id}`} key={item.id}>{item.label}</a>)}</nav>
        <a className="top-contact" href="#contact">Liên hệ ngay <Icon name="arrow" size={16} /></a>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="ambient ambient-one" /><div className="ambient ambient-two" />
          <div className="hero-copy">
            <span className="status"><i />Sẵn sàng cho đồ án lập trình web</span>
            <h1>Xin chào, tôi là<br /><span>Nguyễn Sỹ Bảo</span></h1>
            <p>Sinh viên Công nghệ thông tin, đam mê lập trình, thiết kế giao diện và phát triển sản phẩm công nghệ tạo giá trị thực tiễn.</p>
            <div className="hero-actions"><a className="button primary" href="#projects">Khám phá dự án <Icon name="arrow" size={18} /></a><a className="button secondary" href="#contact"><Icon name="contact" size={18} /> Liên hệ với tôi</a></div>
            <div className="tech-row">{['Java', 'Python', 'React', 'Tailwind CSS', 'Spring Boot', 'Figma'].map((tag, i) => <span key={tag}><i style={{ background: ['#ef4444', '#eab308', '#2563eb', '#06b6d4', '#10b981', '#a855f7'][i] }} />{tag}</span>)}</div>
          </div>
          <div className="portrait-wrap"><div className="portrait-tag"><Icon name="code" size={16} /> Software Engineer in training</div><img src={imageUrl('5455c.png')} alt="Chân dung Nguyễn Sỹ Bảo" /><div className="floating-code"><b>&lt;developer&gt;</b><span>build · learn · create</span></div></div>
          <div className="stats">{[['10+', 'Dự án & bài tập lớn'], ['2.5/4.0', 'Điểm GPA tích lũy'], ['3+', 'Giải thưởng & Certs'], ['100%', 'Nhiệt huyết & cam kết']].map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
        </section>

        <section className="section about" id="about">
          <SectionHeading kicker="Về bản thân tôi" title="Một lập trình viên trẻ, tư duy sản phẩm" description="Câu chuyện đằng sau những sản phẩm và hành trình tôi đang theo đuổi." />
          <div className="about-grid">
            <div className="profile-card card"><div className="profile-head"><img src={imageUrl('5455c.png')} alt="Nguyễn Sỹ Bảo" /><div><h3>Nguyễn Sỹ Bảo</h3><span>2004 · 22 tuổi</span><p>Công nghệ thông tin · Nghệ An, Việt Nam</p></div></div><div className="profile-meta"><span>Trường ĐH Vinh</span><span>Sinh viên</span></div><a className="button primary full" href="mailto:bao2006@gmail.com"><Icon name="mail" size={17} /> Liên hệ qua email</a></div>
            <article className="story card"><h3>Giới thiệu về bản thân</h3><p>Có duyên với ngành công nghệ từ những dòng mã Pascal và C++. Những khoảnh khắc dòng code chạy được đã tạo nên niềm đam mê lập trình của mình.</p><p>Ở đại học, ngọn lửa ấy trở thành say mê tạo ra các sản phẩm web và ứng dụng có giá trị thực tiễn. Mình luôn tin rằng một ứng dụng tốt giải quyết đúng vấn đề của người dùng.</p></article>
            <div className="principles card"><h3>Điểm mạnh nổi bật</h3><div><b>Tự học & nghiên cứu tài liệu</b><p>Chủ động cập nhật công nghệ mới.</p></div><div><b>Tư duy logic & thuật toán</b><p>Nền tảng phát triển phần mềm vững chắc.</p></div><div><b>UX/UI & Clean Code</b><p>Tối ưu trải nghiệm và mã nguồn rõ ràng.</p></div></div>
            <div className="goals card"><h3>Mục tiêu nghề nghiệp</h3><div className="timeline-mini"><span>Ngắn hạn</span><b>Software Engineer Intern</b><p>Trở thành kỹ sư phần mềm có tư duy hệ thống.</p></div><div className="timeline-mini"><span>Dài hạn</span><b>Technical Lead</b><p>Dẫn dắt đội kỹ thuật và xây dựng sản phẩm bền vững.</p></div></div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <SectionHeading kicker="Competency Matrix" title="Kỹ năng chuyên môn" description="Nền tảng kỹ thuật, tư duy giải quyết vấn đề và công cụ làm việc." />
          <div className="skills-layout"><div className="skill-list">{skills.map(([name, value, copy]) => <article className="skill-card card" key={name}><div className="skill-top"><span className="skill-icon"><Icon name="code" size={18} /></span><h3>{name}</h3><b>{value}</b></div><div className="progress"><span style={{ width: value }} /></div><p>{copy}</p></article>)}</div><aside className="toolbox card"><h3>Công cụ & môi trường</h3><p>Hệ sinh thái công cụ hỗ trợ quy trình lập trình và kiểm thử.</p><div>{['Git', 'GitHub', 'VS Code', 'IntelliJ', 'Postman', 'Docker', 'Linux'].map(tool => <span key={tool}>{tool}</span>)}</div><pre><i /> <i /> <i /> bash ~ portfolio{'\n'}<b>$</b> whoami{'\n'}<em>Software Engineer in training</em>{'\n'}<b>$</b> status{'\n'}<em>Ready to create</em></pre></aside></div>
        </section>

        <section className="section projects-section" id="projects">
          <SectionHeading kicker="Portfolio Highlights" title="Dự án đã thực hiện" description="Các sản phẩm website và ứng dụng được phát triển trong học tập và làm việc nhóm." />
          <div className="project-grid">{projects.map(project => <article className="project-card card" key={project.title}><div className="project-image"><img src={project.image} alt={`Giao diện ${project.title}`} /><span>{project.eyebrow}</span></div><div className="project-content"><h3>{project.title}</h3><b className="role">{project.role}</b><p>{project.copy}</p><div className="contribution"><b>Đóng góp chính</b><span>{project.contribution}</span></div><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="button primary full" href="#contact">Trao đổi về dự án <Icon name="arrow" size={16} /></a></div></article>)}</div>
          <div className="collab-banner"><span className="skill-icon"><Icon name="code" /></span><div><b>Bạn có ý tưởng dự án thú vị?</b><p>Hãy cùng nhau hợp tác và hiện thực hóa ý tưởng.</p></div><a className="button primary" href="#contact">Trao đổi ý tưởng</a></div>
        </section>

        <section className="section education-section" id="education">
          <SectionHeading kicker="Academic Journey" title="Học vấn & quá trình đào tạo" description="Nền tảng kiến thức học thuật tại trường đại học." />
          <div className="education-hero card"><img src={imageUrl('23f3c.png')} alt="Trường Đại học Vinh" /><div><span>VINH UNIVERSITY</span><h3>Trường Đại học Vinh</h3><b>Công nghệ thông tin</b><p>Chuyên sâu Kỹ thuật phần mềm</p></div><div className="gpa"><small>Điểm GPA tích lũy</small><strong>2.5<em>/4.0</em></strong><span>Xếp loại: Khá</span></div></div>
          <div className="education-body"><div><h3 className="subheading">Môn học tiêu biểu</h3><div className="subject-tags">{['Cấu trúc dữ liệu & Giải thuật', 'Cơ sở dữ liệu', 'Lập trình web', 'Xác suất thống kê', 'Chính trị'].map(subject => <span key={subject}>{subject}</span>)}</div></div><div><h3 className="subheading">Lộ trình học tập</h3><div className="education-timeline">{[['Năm 1 · 2021—2022', 'Nền tảng toán & lập trình'], ['Năm 2 · 2022—2023', 'Cấu trúc dữ liệu & OOP'], ['Năm 3 · 2023—2024', 'Phát triển phần mềm thực chiến'], ['Năm 4 · 2024—2025', 'Thực tập & khóa luận tốt nghiệp']].map(([year, title], i) => <article className={i === 3 ? 'current' : ''} key={year}><span>{year}</span><h4>{title}</h4></article>)}</div></div></div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-intro"><span className="status"><i />Đang mở cho cơ hội mới</span><h2>Hãy kết nối với tôi</h2><p>Tôi luôn sẵn sàng trao đổi về cơ hội thực tập, công việc hoặc dự án công nghệ.</p><div className="contact-details"><a href="mailto:bao2006@gmail.com"><span><Icon name="mail" /></span><small>Email cá nhân</small><b>bao2006@gmail.com</b></a><a href="tel:0946320928"><span><Icon name="phone" /></span><small>Điện thoại & Zalo</small><b>0946320928</b></a><div><span><Icon name="pin" /></span><small>Khu vực</small><b>phường Trường Vinh - Nghệ An</b></div></div></div>
          <form className="contact-form card" onSubmit={submitContact}><h3><Icon name="contact" /> Gửi thông điệp trực tuyến</h3><p>Biểu mẫu sẽ mở ứng dụng email mặc định để bạn gửi tin nhắn.</p><label>Họ và tên *<input name="name" required placeholder="Nhập họ và tên..." /></label><label>Địa chỉ Email *<input name="email" required type="email" placeholder="example@domain.com" /></label><label>Chủ đề<select name="subject" defaultValue="Cơ hội việc làm / Thực tập"><option>Cơ hội việc làm / Thực tập</option><option>Hợp tác dự án</option><option>Trao đổi chuyên môn</option></select></label><label>Nội dung tin nhắn *<textarea name="message" required placeholder="Nội dung lời nhắn..." /></label><button className="button primary full" type="submit">Mở ứng dụng email <Icon name="arrow" size={17} /></button></form>
        </section>
      </main>

      <footer><div className="brand"><img src={imageUrl('1f92d.png')} alt="" /><span><strong>Nguyễn Sỹ Bảo</strong><small>IT PORTFOLIO</small></span></div><p>Thiết kế và phát triển với niềm đam mê công nghệ.</p><span>© 2025 Nguyễn Sỹ Bảo</span></footer>
      <nav className="mobile-nav" aria-label="Điều hướng trên thiết bị di động">{navItems.map(item => <a href={`#${item.id}`} key={item.id}><Icon name={item.icon} size={17} /><span>{item.label}</span></a>)}</nav>
    </div>
  )
}

export default App
