var calLanguages = {
  en: { // English
    months: [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ],
    dayOfWeekShort: [
      'S', 'M', 'T', 'W', 'T', 'F', 'S'
    ],
    dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    postsMonthTip: 'Posts published in LMM yyyy',
    titleFormat: 'LMM yyyy'
  },
  ch: { // Simplified Chinese
    months: [
      '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
    ],
    dayOfWeekShort: [
      '日', '一', '二', '三', '四', '五', '六'
    ]
  },
  se: { // Swedish
    months: [
      'Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'
    ],
    dayOfWeekShort: [
      'Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör'
    ]
  },
  ja: { // Japanese
    months: [
      '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'
    ],
    dayOfWeekShort: [
      '日', '月', '火', '水', '木', '金', '土'
    ],
    dayOfWeek: ['日曜', '月曜', '火曜', '水曜', '木曜', '金曜', '土曜']
  },
  vi: { // Vietnamese
    months: [
      'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
    ],
    dayOfWeekShort: [
      'CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'
    ],
    dayOfWeek: ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy']
  },
  sl: { // Slovenščina
    months: [
      'Januar', 'Februar', 'Marec', 'April', 'Maj', 'Junij', 'Julij', 'Avgust', 'September', 'Oktober', 'November', 'December'
    ],
    dayOfWeekShort: [
      'Ned', 'Pon', 'Tor', 'Sre', 'Čet', 'Pet', 'Sob'
    ],
    dayOfWeek: ['Nedelja', 'Ponedeljek', 'Torek', 'Sreda', 'Četrtek', 'Petek', 'Sobota']
  },
  cs: { // Čeština
    months: [
      'Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'
    ],
    dayOfWeekShort: [
      'Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'
    ]
  },
  hu: { // Hungarian
    months: [
      'Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'
    ],
    dayOfWeekShort: [
      'Va', 'Hé', 'Ke', 'Sze', 'Cs', 'Pé', 'Szo'
    ],
    dayOfWeek: ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat']
  },
  az: { //Azerbaijanian (Azeri)
    months: [
      'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'
    ],
    dayOfWeekShort: [
      'B', 'Be', 'Ça', 'Ç', 'Ca', 'C', 'Ş'
    ],
    dayOfWeek: ['Bazar', 'Bazar ertəsi', 'Çərşənbə axşamı', 'Çərşənbə', 'Cümə axşamı', 'Cümə', 'Şənbə']
  },
  bs: { //Bosanski
    months: [
      'Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'
    ],
    dayOfWeekShort: [
      'Ned', 'Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub'
    ],
    dayOfWeek: ['Nedjelja', 'Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota']
  },
  ca: { //Català
    months: [
      'Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'
    ],
    dayOfWeekShort: [
      'Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'
    ],
    dayOfWeek: ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte']
  },
  'en-GB': { //English (British)
    months: [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ],
    dayOfWeekShort: [
      'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
    ],
    dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  },
  et: { //'Eesti'
    months: [
      'Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember'
    ],
    dayOfWeekShort: [
      'P', 'E', 'T', 'K', 'N', 'R', 'L'
    ],
    dayOfWeek: ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev']
  },
  'zh-TW': { //Traditional Chinese (繁體中文)
    months: [
      '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
    ],
    dayOfWeekShort: [
      '日', '一', '二', '三', '四', '五', '六'
    ],
    dayOfWeek: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  },
  'zh-CN': { //Simplified Chinese (简体中文)
    months: [
      '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
    ],
    dayOfWeekShort: [
      '日', '一', '二', '三', '四', '五', '六'
    ],
    dayOfWeek: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    postsMonthTip: '查看yyyy年MM月的文章',
    titleFormat: 'yyyy年MM月'
  },
};