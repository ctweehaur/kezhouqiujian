// ==========================================================================
// 📖 《刻舟求剑》深度文本赏析数据库 (analysis.js) - 马来西亚文言文黄金范例版
// ==========================================================================

const U_TAG = (text) => `<span class="proper-noun">${text}</span>`;

const OMISSION_TAG = (role, text) => 
    `<span style="display:inline-block; background:var(--wrong-bg); color:var(--wrong-text); border:1px dashed var(--wrong-border); padding:0 6px; margin:0 2px; border-radius:4px; font-size:12.5px; font-weight:800;" title="文言省略句补全成分">＋${role}：${text}</span>`;

const GRAMMAR_TAG = (type, text) => 
    `<span style="display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.22); padding:2px 8px; margin:2px 4px 2px 0; border-radius:5px; font-size:12px; font-weight:800; vertical-align:top;">${type}：${text}</span>`;

const ANCIENT_MODERN_TAG = (word, ancient, modern) => 
    `<div style="display:inline-flex; flex-direction:column; background:var(--notebook-bg); border:1px solid rgba(43,76,101,0.22); padding:5px 10px; margin:3px 6px 3px 0; border-radius:6px; font-size:12px; line-height:1.55; vertical-align:middle;">` +
        `<div style="color:var(--primary-color); font-weight:800;">🔹 【${word}】古义：${ancient}</div>` +
        `<div style="color:var(--text-muted); font-weight:600; border-top:1px dashed var(--input-border); margin-top:2px; padding-top:2px;">🔸 【${word}】今义：${modern}</div>` +
    `</div>`;

const CARET = `<span style="color:var(--wrong-color); font-weight:800; padding:0 2px;" title="此处省略了句子成分">‸</span>`;

const lessonTeacherAnalysis = {
    overview: "<strong>【全文白话译文（含省略成分补全）】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:6px; line-height:1.95;'>" +
        "有一个乘船渡江的" + U_TAG("楚国") + "人，他的宝剑从船上掉进了水里，" + OMISSION_TAG("主语", "他") + "急忙用刀在那艘船的船舷上刻了一个记号，说道：“这儿是我的剑掉下去的地方。”等船停下后，" + OMISSION_TAG("主语", "他") + "便顺着自己所刻记号的地方下水去寻找宝剑。船已经向前开走了，可是掉进水里的剑却不会移动，像这样去寻找宝剑，不也是很糊涂吗！" +
        "</span><br><br>" +
        "<strong>【古代文化常识与阅读提示（课本第103页）】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:4px;'>《刻舟求剑》选自《吕氏春秋·察今》。《吕氏春秋》又名《吕览》，是" + U_TAG("战国") + "末年（前239年前后）" + U_TAG("秦国") + "丞相" + U_TAG("吕不韦") + "组织属下门客集体编撰的<strong>杂家</strong>（兼收儒、法、道等各派思想）著作，共二十余万字。《察今》篇的主旨在于论述君主治理国家应当“明察当今之势”，根据时代变化革新法令，切不可盲目照搬古法。作者借这则仅有45字的精悍寓言，辛辣讽刺了那些拘泥陈规、不知随客观形势变化而变通的顽固派。</span>",

    paragraphs: {
        1: "<strong>【逐句白话直译与 UASA 考场采分点对照（上文下译）】</strong>" +
           "<div style='font-size:12.5px; color:var(--wrong-text); background:var(--wrong-bg); border:1px dashed var(--wrong-border); padding:6px 12px; border-radius:6px; margin-top:8px; font-weight:600;'>" +
               "💡 <strong>本课句式与翻译调序核心：</strong>① 定语后置（楚人有涉江者 ＝ 有涉江之楚人）；② 判断句（是吾剑之所从坠）；③ 状语后置调序（求剑若此 → 译为“像这样找剑”）；④ 反问句（不亦惑乎！）。" +
           "</div>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:12px;'>" +

               // 第 1 句对照卡片（起因与经过一：坠剑契舟）
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       U_TAG("楚") + "人有[涉][江][者]，其剑[自]舟中[坠][于]水，" + CARET + "[遽][契]其舟，曰：“[是]吾剑之[所从坠]。”" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "有一个[乘船渡过]✓[长江]✓[的]✓" + U_TAG("楚国") + "人，他的剑[从]✓船上[掉落]✓[到]✓水里，" + OMISSION_TAG("主语", "他") + "[急忙/立即]✓[用刀雕刻]✓那艘船的船舷，说：“[这儿]✓是我的剑[掉下去的地方]✓。”" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("涉", "渡水、乘船渡过", "牵涉、涉及") +
                       ANCIENT_MODERN_TAG("契(qì)", "用刀雕刻（动词）", "契约、默契（名词）") +
                       ANCIENT_MODERN_TAG("是", "这、这儿（近指代词）", "判断动词（是）") +
                       GRAMMAR_TAG("定语后置句", "楚人有涉江者 ＝ 有涉江之楚人") +
                       GRAMMAR_TAG("传神副词", "“遽（急忙）”刻画出楚人自以为得计的荒唐神态") +
                   "</div>" +
               "</div>" +

               // 第 2 句对照卡片（经过二：舟止求剑）
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "舟[止]，" + CARET + "从其[所契者]入水[求][之]。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "船[停下]✓后，" + OMISSION_TAG("主语", "他") + "便从他[所刻记号的地方]✓下水去[寻找]✓[那把剑]✓。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("求", "寻找（动词）", "请求、要求") +
                       GRAMMAR_TAG("所字结构", "所契者 ＝ 所刻记号的地方") +
                   "</div>" +
               "</div>" +

               // 第 3 句对照卡片（议论点睛：舟行剑不行）
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "舟已[行]矣，[而]剑不行，求剑[若此]，[不亦][惑][乎]！" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "船已经[向前行驶]✓了，[可是/但是]✓剑不会移动，[像这样]✓去找剑，[不也是]✓很[糊涂]✓[吗]✓！" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("行", "前行、移动", "可以、行业") +
                       ANCIENT_MODERN_TAG("惑", "糊涂、愚蠢", "疑惑、诱惑") +
                       GRAMMAR_TAG("状语后置句", "求剑若此 ＝ 若此求剑（像这样找剑）") +
                       GRAMMAR_TAG("固定反问句式", "不亦……乎！＝不也是很……吗！（課本注释13）") +
                   "</div>" +
               "</div>" +

           "</div>"
    }
};
