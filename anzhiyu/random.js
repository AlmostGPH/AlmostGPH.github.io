var posts=["2023/01/09/About-HWS2023/","2023/10/11/About-ISEC2023/","2022/12/19/About-ADword/","2023/10/14/About-BUUCTF/","2022/11/02/About-Hackergame/","2022/11/02/About-MoeCTF/","2023/05/23/About-My-Arch/","2023/01/01/About-NepnepxCatCTF/","2023/05/27/About-cisn2023/","2023/10/16/About-xiang-shan-bei-23/","2023/04/09/About-TKHASH/","2023/01/12/About_Hgame/","2023/06/02/ENG-Program/","2022/11/02/First_of_all/","2023/08/06/For-2023s/","2023/10/08/For-news-in-6th-week/","2023/05/21/LearningPWN/","2023/09/20/HCTF2023/","2023/06/03/Shanxi23/","2023/06/01/NextiPad/","2022/11/01/Test/","2023/02/10/hittps-stupid-me/","2023/07/03/iPad-with-AidLux/","2023/03/02/iPad-with-codespace/","2022/12/15/why-can-t/","2023/08/06/wmctf2023/","2022/12/15/About_markdown/About_markdown/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};