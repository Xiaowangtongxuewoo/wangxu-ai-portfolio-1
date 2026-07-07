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
    company: '逸仙电商',
    role: '产品开发实习生',
    summary:
      '参与新品开发全流程支持，负责市场与消费者调研、产品卖点提炼及跨部门项目协同，推动产品从需求洞察到上市落地。',
    bullets: [
      <>
        <strong>竞品调研：</strong>针对不同类型产品开展深入调研，拆解同品类直接竞品的品牌定位、成分卖点、功效信息与用户评价，提炼差异化与创新点。
      </>,
      <>
        <strong>卖点梳理：</strong>基于产品概念与定位，以 KOL 沟通与消费者原声为切入点，梳理主流社媒平台相关产品的市场沟通方式，<strong>90% 以上建议获部门采纳</strong>。
      </>,
      <>
        <strong>项目管理：</strong>基于降本增效和品牌形象提升目标，跟进万量级礼袋与环保抽绳袋开发项目，协调采购、质量、设计等部门，预计实现 <strong>10W+ 降本目标</strong>。
      </>,
      <>
        <strong>消费者调研：</strong>根据产品功效与特性设计并执行 <strong>10+ 份消费者需求调研</strong>，组织 <strong>2 场产品感官测试</strong>，80% 建议被研发及市场部门采纳。
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
        <strong>项目统筹与前期研究：</strong>协助项目经理推进整体进度，独立完成典型案例调研、访谈纪要整理、资料收集与结构化输出。
      </>,
      <>
        <strong>数据分析与诊断支持：</strong>使用 Excel、PPT 等工具，从企业数据、体制机制等维度开展分析，协助构建项目指标体系、分析模型，并撰写评估报告与汇报材料。
      </>,
      <>
        <strong>方案设计与客户沟通：</strong>参与项目方案讨论与设计，根据客户反馈调整项目内容；负责部分客户对接，跟踪方案落地过程中的具体问题。
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
        <strong>骑手招募：</strong>优先挖掘熟人网络，借助同学间信任关系快速建立配送团队，单周骑手规模增长 <strong>150%</strong>。
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

export const travelImages = Array.from({ length: 16 }, (_, index) => {
  const number = String(index + 1).padStart(2, '0');
  return {
    src: `/assets/travel/travel-${number}.jpg`,
    title: `旅行瞬间 ${number}`,
  };
});
