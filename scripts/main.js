const text = [
  "hell",
  "sus",
  "clown",
  "tiky",
  "suaris",
  "dos",
  "unos",
  "yneymurnehmeynwtneyhwtheybwy",
  "2rv1rg1rgqrh2th3yh2rh3yj62hqrgqrphqrpvkecleocejxenx&&",
  "&&=;ijehwjieiwkcowxiwxiex",
  "nwtwyh6hqtn73neyn4un2tbwyneuhwtbeun2ybeun",
  "$:2=:2_,3_&1=:3_&26;3&47&2_;,3;+=:,3_*?+/;/;",
  "yenwthythwtheyjth2th2thethethwtn",
  "1rhqrhwth14hwthwthqrnwyney qrgwynwth2theqrbgwb1tg 2t 1t y2v1r wyv1tb2y qr 2tvqr wyv1r 2t 1r 1r  r r r  ",
  "t",
  "tnhrtnryhrnywry2jyr2jwjyr4jy2642u4i62y42intrqnhrw1h64rqnhtku2wvrwrnybgrwrjy2",
  "1nu4nur1mt2iengebg rwhey 1fwhe1ybfnw evytjw ryb1 twj41ybjtw unjnt4hy1qnhr3yh jrwr1untj 3hyr1h ",
  "4yhrhy1r1nygtr1rnh4h1tqebyrb3yb4yb4 bt3eny1t j23vy1nti4y1b wjtr hwtn ",
  "nyr1nyrrny1nyr11nur1nurrnunu4geb1gr2y4htunr2cetn4u4in55liu4k 1 gehr1neg1bbbye1ebg1etvvte1e1by er yth r1y rh2 r1yb",
  "ki5webywtmirnqywthnk52irqyhtwj tkiwrbytwhny4qhgbegtiki5ktiktiktgernhrjurgwevgr hetvs vebywh wtvsh ebyrwvrnyhtn34bmqgqneun1tb",
  "wtheyn2rg3yh3yj4unt4ik3yjb2yb2tb2th2tv",
];


const spam = () => text[Mathf.floor(Mathf.random() * text.length)];

Timer.schedule(()=>Core.settings.getDataDirectory().child("crashes").child("hell.txt").writeString(spam()), 0.2, 0.2);