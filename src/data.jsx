export const navItems = [
  { href: '#resume', label: '个人简历' },
  { href: '#experience', label: '实习经历' },
  { href: '#workflow', label: 'AI建站过程' },
  { href: '#proofs', label: '成果证明' },
  { href: '#travel', label: '旅行相册' },
];

export const honors = [
  '研究生拔尖创新人才',
  '研究生学业奖学金',
  '研究生企业经营大赛全国三等奖',
  '大学生创新创业训练赛省级二等奖',
  '河南省 YonBIP 商业创新大赛省级一等奖',
  '全国大学生数智化企业经营沙盘大赛省级二等奖',
  '优秀班干部',
];

export const skills = [
  'Office 数据处理',
  '数据透视表',
  'R / Python / SQL',
  'SPSS / Amos / Mplus',
  '问卷设计',
  '消费者调研',
  'Photoshop / Visio / 剪映',
  'ChatGPT / Codex',
  'Vibe Coding',
];

export const experiences = [
  {
    period: '2025.07 - 2025.11',
    company: '星际悦动（usmile牙刷）',
    role: '产品运营实习生',
    summary:
      '参与口腔护理系列新品开发全流程支持，围绕电动牙刷、冲牙器及刷头耗材等产品，进行市场调研、用户需求分析、产品卖点提炼与跨部门项目协同，推动产品从需求洞察到上市落地。',
    bullets: [
      <>
        <strong>竞品调研：</strong>调研飞利浦、米家、素士、舒客等竞品 <strong>30+ 款 SKU</strong>，拆解品牌定位、价格区间、功能参数、核心卖点与用户评价，输出 <strong>3 份竞品分析报告</strong>，支持新品定位与功能优化。
      </>,
      <>
        <strong>卖点梳理：</strong>结合电商评论、社媒内容与 KOL 话术，提炼“高效清洁、温和护龈、正畸适用、便携长续航”等核心卖点，输出 <strong>20+ 条沟通话术</strong>，<strong>90% 以上建议获部门采纳</strong>。
      </>,
      <>
        <strong>项目协同：</strong>跟进刷头套装、冲牙器配件及收纳包装等新品配套项目，协调产品、设计、供应链与电商团队，推进打样、包装核对及上线检查，通过优化包装规格与组合方案，预计单套成本降低 <strong>8% - 12%</strong>，实现 <strong>10W+ 降本目标</strong>。
      </>,
      <>
        <strong>消费者调研：</strong>围绕口腔清洁场景与用户使用痛点，设计并收集 <strong>10+ 份用户访谈</strong>，分析 <strong>500+ 条用户反馈</strong>，组织 <strong>2 场样品试用测试</strong>，输出用户洞察报告，<strong>80% 以上建议</strong>被产品及市场团队采纳。
      </>,
    ],
  },
  {
    period: '2025.03 - 2025.05',
    company: '远届咨询',
    role: '咨询顾问实习生',
    summary:
      '全面参与项目计划，围绕前期调研、数据分析、方案设计与客户沟通等环节，为项目推进和方案落地提供支持。',
    bullets: [
      <>
        <strong>项目统筹与前期研究：</strong>协助项目经理推进项目整体进度，独立完成典型案例调研、访谈纪要整理、资料收集与结构化输出，为方案设计提供事实基础。
      </>,
      <>
        <strong>数据分析与诊断支持：</strong>使用 Excel、PPT 等工具，从企业数据、体制机制等对客户开展分析，识别关键问题；协助构建项目指标体系、分析模型，并撰写评估报告与汇报材料。
      </>,
      <>
        <strong>方案设计与客户沟通：</strong>参与项目方案的讨论与设计，根据客户反馈及时调整项目内容；负责部分客户对接，跟踪方案落地过程中的具体问题，为项目经理提供过程支持。
      </>,
    ],
  },
  {
    period: '2022.02 - 2022.06',
    company: '人民公社餐饮店（校园外卖）',
    role: '运营负责人',
    summary:
      '管理 1 个骑手群以及 500+ 人用户社群，搭建配送体系，提升平台曝光度与活跃度，稳定引流转化。',
    bullets: [
      <>
        <strong>社群引流：</strong>策划线下扫楼推广与线上引流策略，联合 4 人团队共派发宣传单页超 1500 份。
      </>,
      <>
        <strong>骑手招募：</strong>优先挖掘熟人网络，借助同学间信任关系快速建立配送团队；根据骑手反馈和配送表现调整任务分配与激励方式，单周内骑手规模增长 <strong>150%</strong>。
      </>,
      <>
        <strong>收入结构：</strong>以商家抽成为主，辅以社群广告推广与用户配送微利，形成可持续盈利模式。
      </>,
      <>
        <strong>成果总结：</strong>最终实现日均订单由 30 单增至 <strong>100+ 单</strong>，月营收超 <strong>10000 元</strong>，用户满意度反馈达 <strong>92%</strong>。
      </>,
    ],
  },
];

export const proofImages = Array.from({ length: 8 }, (_, index) => {
  const number = String(index + 1).padStart(2, '0');
  return {
    src: `/assets/proofs/proof-${number}.jpg`,
    title:
      [
        '2021年河南省省级一等奖',
        '2021年河南省省级二等奖',
        '大学生创新创业训练计划项目结项证明',
        '英语四级证书',
        '2024年粤港澳大湾区学术研讨会一等奖',
        '研究生拔尖创新人才入选证明',
        '2025年全国三等奖',
        '2024-2025学年度研究生学业奖学金',
      ][index] || `成果证明 ${number}`,
  };
});

export const travelImages = Array.from({ length: 20 }, (_, index) => {
  const number = String(index + 1).padStart(2, '0');
  return {
    src: `/assets/travel/travel-${number}.jpg`,
    title: `旅行瞬间 ${number}`,
  };
});
