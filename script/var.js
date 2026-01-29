// All the variable for the app
// Their name are explicit

var username = "Arnoud";
var clientid = "be212a58528168962a39c64052c1d88e";
var redirecturi = "https://arnoudleclercq.github.io/startpage/callback.html";
var locations = [
  "784201",
  "784302"
];
var images = [
 // "1412446496031.jpg",
  "wallpaper.jpg",
//  "1417804954510.jpg",
//  "1422771896804.jpg",
//  "1424655132831.jpg",
//  "1425939966695.jpg",
//  "1429482830109.jpg",
//  "1429569823779.jpg",
 // "1437167260211.jpg",
 // "1437214448937.jpg",
 // "1437214448937.jpg",
//  "1444816416285.jpg",
//  "1444827390885.jpg",
//  "1444827771939.jpg",
//  "1445223016379.jpg",
//  "1445223050369.jpg",
//  "1445370353275.jpg",
//  "1445705808951.jpg",
//  "1445713184723.jpg",
//  "1448399280112.jpg",
//  "1450066383293.jpg",
//  "1450074394745.jpg"
];
var searchs = [
  ["!g", "https://www.google.com/search?q="],
  ["!y", "https://www.youtube.com/results?search_query="],
  ["!w", "https://en.wikipedia.org/w/index.php?search="]
];
var favorites = [

  [ "Social",
    [
      ["gmail", "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox", "gmail"],
      ["maps", "https://www.google.com/maps", "maps"],
      ["linkedin", "https://www.linkedin.com/feed/", "ln"],
      ["youtube", "https://www.youtube.com", "yt"]
    ]
  ],
  
  [ "Work",
    [
      
      ["ionbiz", "https://ebo.ionbiz.com/", "ion"],
      ["confluence", "https://confluence.ebo-enterprises.com/", "con"],
      ["omnitracker", "https://serviceportal.ebo-enterprises.com/internal20/#/login?locale=nl-be", "omni"],
      ["odoo", "https://erp.ebo-enterprises.com/web#cids=1&home=", "od"],
      ["odoo - bills", "https://erp.ebo-enterprises.com/web#action=199&model=account.move&view_type=list&menu_id=509&cids=1", "odb"],
      ["payflip", "https://app.payflip.be/benefits", "pf"],
      ["officient", "https://selfservice.officient.io/login", "of"],
      ["superset", "https://10.10.97.113/superset/welcome/", "ss"],
      ["gitlab", "https://scm.ebo-enterprises.com/", "gitl"],
      ["sharging sessions e-BO", "https://charging-stations.ebo-enterprises.com/", "cg"],
      ["smappee", "https://dashboard.smappee.net/login", "sm"],
      ["powerbi projects", "https://app.powerbi.com/groups/me/reports/08ba9129-1500-4fc5-a93d-8503f3d77cde/e465fd1475515705d822?ctid=24133f96-2b38-4360-9546-979fc3caa9d7&experience=power-bi", "bip"],
      ["powerbi project orders", "https://app.powerbi.com/groups/me/apps/0632e278-f892-4a75-8600-021f477a3bc5/reports/1276306e-9e2b-4848-b5ea-94542a9d89a7/ReportSection984ddc7aee93c947e5c7?experience=power-bi", "bio"]
    ]
  ],
  
  [ "Tools",
    [
      ["chatgpt", "https://chatgpt.com/", "gpt"],
      ["deepl", "https://www.deepl.com/nl/translator", "deepl"],
      ["midjourney", "https://www.bing.com/images/create?", "mj"],
      ["ilovepdf", "https://www.ilovepdf.com/", "pdf"],
      ["geo antennes", "https://www.geopunt.be/?service=https%3A%2F%2Fwww.mercator.vlaanderen.be%2Fraadpleegdienstenmercatorpubliek%2Fows%3Flayers%3Dus%3Aus_zndant_pnt", "geo"],
      ["marinetraffic", "https://www.marinetraffic.com/en/ais/home/centerx:3.547/centery:51.430/zoom:13", "mt"],
      ["offshore map", "https://map.4coffshore.com/offshorewind/", "off"], 
      ["line of sight calc", "https://support.saftehnika.com/en/pathcalculator", "los"],
      ["no fly zones map", "https://apps.geocortex.com/webviewer/?app=1062438763fd493699b4857b9872c6c4&locale=en", "nofly"]
    ]
  ],
  [ "5G",
    [
      ["omgevingsloket", "https://omgevingsloket.omgeving.vlaanderen.be/#PAGE_PROJECTS_OVERVIEW", "loket"],
      ["zendantennes", "https://zendantennes.omgeving.vlaanderen.be/#/dossiers", "zend"],
      ["eu portaal", "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/projects-details/43251567/101095135/CEF2027", "eu"],
      ["5G Smart Communities", "https://www.5gsc.eu/", "5GSC"], 
      ["eu amendement flow", "https://webgate.ec.europa.eu/funding-tenders-opportunities/display/IT/Amendments", "amf"], 
      ["eu amendement guide", "chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/common/guidance/amendment-guide_en.pdf", "amg"]
    ]
  ],
  [ "Random",
    [
      ["reddit", "https://www.reddit.com", "rd"],
      ["github", "https://www.github.com", "gh"]
    ]
  ],
  [ "Cybersec / Clients",
    [
      ["tryhackme", "https://tryhackme.com/", "thm"],
      ["cisco academy", "https://www.netacad.com/", "ca"],
      ["Amprion Jira", "https://amprion.atlassian.net/jira/software/c/projects/OIHSYS/boards/338", "ampj"],
      ["Pkwnd Sharepoint", "https://parkwind.sharepoint.com/sites/SNII_ELC/Exchange_with_eBO?xsdata=MDV8MDJ8QXJub3VkLkxlY2xlcmNxQGViby1lbnRlcnByaXNlcy5jb218NWY0YWQ0ODAzMjU5NGUwZWQzNWEwOGRlMWI3OGUzNTh8MjQxMzNmOTYyYjM4NDM2MDk1NDY5NzlmYzNjYWE5ZDd8MHwwfDYzODk3ODQwMzE5NTk1NTMyMnxVbmtub3dufFRXRnBiR1pzYjNkOGV5SkZiWEIwZVUxaGNHa2lPblJ5ZFdVc0lsWWlPaUl3TGpBdU1EQXdNQ0lzSWxBaU9pSlhhVzR6TWlJc0lrRk9Jam9pVFdGcGJDSXNJbGRVSWpveWZRPT18MHx8fA%3d%3d&sdata=MmlueXdzYVJIZG9uV1N3bG1hMk1oNHZFdHhRWjloOU1hWlczYXJIdE50Yz0%3d&clickparams=eyAiWC1BcHBOYW1lIiA6ICJNaWNyb3NvZnQgT3V0bG9vayIsICJYLUFwcFZlcnNpb24iIDogIjE2LjAuMTkxMjcuMjAzMTQiLCAiT1MiIDogIldpbmRvd3MiIH0%3d&SafelinksUrl=https%3a%2f%2fparkwind.sharepoint.com%2fsites%2fSNII_ELC%2fExchange_with_eBO", "pws"],
      ["TWP Sharepoing", "https://taeanwind.sharepoint.com/sites/Taean/Shared%20External/Forms/AllItems.aspx?csf=1&web=1&e=kAHxSb&CID=d37fc6f8%2D8538%2D4a97%2D8bb7%2D360988b4f96a&FolderCTID=0x012000B3F748F2E92F1E4A84EAF7F4D974B47F&id=%2Fsites%2FTaean%2FShared%20External%2F68%2De%2DBO", "twp"],
      ["TWP Omega365", "https://cop.omega365.com", "twpo"],
    ]
  ]
];
var feeds = [
 // ["Hacker News", "https://news.ycombinator.com/rss"],
//  ["TechCrunch", "http://feeds.feedburner.com/TechCrunch/"],
 // ["The Verge", "https://www.theverge.com/rss/index.xml"],
    ["Nieuwsblad", "https://www.nieuwsblad.be/rss"],
  //  ["Wired", "https://www.wired.com/feed/rss"],
 // ["Ars Technica", "http://feeds.arstechnica.com/arstechnica/index/"],
//  ["Google Tech News", "https://news.google.com/rss/headlines/section/topic/TECHNOLOGY"],
 // ["Reddit Technology", "https://www.reddit.com/r/technology/.rss"]
];
