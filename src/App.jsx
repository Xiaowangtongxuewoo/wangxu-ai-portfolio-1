import { useState } from 'react';
import { experiences, honors, navItems, proofImages, skills, travelImages } from './data.jsx';

function FixedNav() {
  return (
    <header className="fixed-nav">
      <a className="brand" href="#hero" aria-label="返回首页">
        <span className="brand-mark">WX</span>
        <span>王旭</span>
      </a>
      <nav aria-label="站内导航">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href="/assets/documents/resume.pdf" target="_blank" rel="noreferrer">
        下载简历
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <video
        className="hero-video"
        src="/assets/media/hero-background.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="hero-shade" />
      <div className="hero-inner page-shell">
        <div className="hero-content">
          <p className="eyebrow">AI Skill Application Portfolio</p>
          <h1>王旭</h1>
          <p className="hero-lead">
            广东工业大学工商管理硕士在读，关注数据分析、用户洞察、运营协同与 AI 工具应用。
            本站以真实简历、证明材料和个人相册为内容基础，借助 AI 编程工具完成全站策划、开发与验证。
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/assets/documents/resume.pdf" target="_blank" rel="noreferrer">
              查看简历 PDF
            </a>
          </div>
        </div>
        <aside className="hero-card" aria-label="个人信息">
          <img src="/assets/profile/portrait.jpg" alt="王旭证件照" />
          <dl>
            <div>
              <dt>学校</dt>
              <dd>广东工业大学</dd>
            </div>
            <div>
              <dt>专业</dt>
              <dd>工商管理硕士</dd>
            </div>
            <div>
              <dt>邮箱</dt>
              <dd>15290405615@163.com</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function Resume() {
  return (
    <section className="section page-shell" id="resume">
      <SectionHeading eyebrow="Resume" title="个人简历">
        广东工业大学工商管理硕士在读，具备管理学、市场营销、数据分析与AI工具应用基础，获研究生拔尖创新人才、学业奖学金及多项创新创业竞赛奖项。
      </SectionHeading>
      <div className="resume-grid">
        <article className="panel hover-panel">
          <h3>教育背景</h3>
          <div className="timeline-item">
            <span>2024.09 - 至今</span>
            <strong>广东工业大学 | 工商管理硕士</strong>
            <p>核心课程：管理数据分析、消费者行为学、市场营销学、多元统计分析、企业战略管理等。</p>
            <p>平均分 88.3/100，具备管理学、营销与数据分析基础。</p>
          </div>
          <div className="timeline-item">
            <span>2020.09 - 2024.06</span>
            <strong>中原工学院 | 工商管理学士</strong>
          </div>
        </article>
        <article className="panel hover-panel">
          <h3>能力关键词</h3>
          <div className="tag-cloud">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </article>
        <article className="panel hover-panel">
          <h3>荣誉概览</h3>
          <ul className="clean-list">
            {honors.map((honor) => (
              <li key={honor}>{honor}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section soft-band" id="experience">
      <div className="page-shell">
        <SectionHeading eyebrow="Experience" title="实习经历">
          拥有产品开发、咨询顾问与校园运营经历，参与市场调研、竞品分析、数据诊断、方案设计、用户运营和跨部门协同，具备较强的问题分析与执行落地能力。
        </SectionHeading>
        <div className="experience-stack">
          {experiences.map((item) => (
            <article className="experience-card hover-panel" key={`${item.company}-${item.role}`}>
              <div className="experience-topline">
                <span>{item.period}</span>
                <strong>
                  {item.company} | {item.role}
                </strong>
              </div>
              <p>{item.summary}</p>
              <ul>
                {item.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  const steps = [
    ['01', '需求整理', '明确求职展示目标，整理简历、证书、照片、相册与岗位表达重点。'],
    ['02', '素材加工', '将 PDF、DOCX、图片和视频统一放入可部署资源目录，控制加载路径。'],
    ['03', '代码实现', '使用 React + Vite 重构页面组件，构建可维护的内容和展示结构。'],
    ['04', '部署验证', '通过本地校验、构建和 Cloudflare Pages 部署，形成公开访问网址。'],
  ];

  return (
    <section className="section soft-band" id="workflow">
      <div className="page-shell">
        <SectionHeading eyebrow="AI Workflow" title="AI建站过程">
          从需求整理、素材加工、代码实现、交互调试到部署准备的完整 AI 辅助开发流程。
        </SectionHeading>
        <div className="workflow-grid">
          {steps.map(([number, title, text]) => (
            <article className="workflow-step hover-panel" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery({ title, eyebrow, items, id }) {
  const [active, setActive] = useState(null);

  return (
    <section className="section page-shell" id={id}>
      <SectionHeading eyebrow={eyebrow} title={title}>
        基础版保留轻量预览交互，点击图片可查看大图
      </SectionHeading>
      <div className={`gallery-grid ${id}-grid`}>
        {items.map((item) => (
          <button className="gallery-card" key={item.src} type="button" onClick={() => setActive(item)}>
            <img src={item.src} alt={item.title} loading="lazy" />
            <span>{item.title}</span>
          </button>
        ))}
      </div>
      {active && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <button type="button" onClick={() => setActive(null)}>
            关闭
          </button>
          <img src={active.src} alt={active.title} />
          <p>{active.title}</p>
        </div>
      )}
    </section>
  );
}

export default function App() {
  return (
    <>
      <FixedNav />
      <main>
        <Hero />
        <Resume />
        <Experience />
        <Workflow />
        <Gallery id="proofs" eyebrow="Proofs" title="成果证明" items={proofImages} />
        <Gallery id="travel" eyebrow="Travel Album" title="旅行相册" items={travelImages} />
      </main>
      <footer className="site-footer">
        <span>© 2026 王旭 · AI技能应用网站</span>
        <a href="#hero">返回顶部</a>
      </footer>
    </>
  );
}
