import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Carousel from "./Carousel.jsx";

export const Merch = () => {
  const { store, dispatch } = useGlobalReducer();
  const [merch, setMerch] = useState({
    carousel1: [
      {
        img: "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C71FsOnMA%2BrL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX425_.png",
        link: "https://www.amazon.com/Food-Truck-T-Shirt-Taco-Culinary/dp/B07D215SC2/ref=sr_1_7?crid=V1QK989MJ1KC&dib=eyJ2IjoiMSJ9.5NrlLrh8xFBZriUbcfuFUgdkdbioTHfYqXmYkFmhyyMgFORXxToj1hnOfsi34eURV0WVFg1vvWzdIWgDBdyAgL-AR1br089RkWNL7Y2gEVy6sRFGjbtrcwSZUWd12RygIyY7m11vZDBouHax406bhcgfcSGAzKc1x1Do_Or8NUQ0x374Hsps4uoDj9LXTu6udsOOpNbWLXXbG2EQFi_cQcZCbeyEDHeyXB3OaqeAEJmgcDK-zieFPm6Y4eo9Im1c3UKBaOvNjS-cV-ketpe3JLhsxyjVN6hA8C3Lqf_pHXI.IfRcIv3Fyqee1hIfgLpFDHTGTz-H_3COYZfdl_v_ZEs&dib_tag=se&keywords=food+truck+hat&qid=1746659697&sprefix=food+truck+hat%2Caps%2C143&sr=8-7",
      },
      {
        img: "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C81G6fqZ-4dL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX425_.png",
        link: "https://www.amazon.com/Eat-Local-Food-Truck-Culinary/dp/B08JRD2KSN/ref=sr_1_15?crid=V1QK989MJ1KC&dib=eyJ2IjoiMSJ9.5NrlLrh8xFBZriUbcfuFUgdkdbioTHfYqXmYkFmhyyMgFORXxToj1hnOfsi34eURV0WVFg1vvWzdIWgDBdyAgL-AR1br089RkWNL7Y2gEVy6sRFGjbtrcwSZUWd12RygIyY7m11vZDBouHax406bhcgfcSGAzKc1x1Do_Or8NUQ0x374Hsps4uoDj9LXTu6udsOOpNbWLXXbG2EQFi_cQcZCbeyEDHeyXB3OaqeAEJmgcDK-zieFPm6Y4eo9Im1c3UKBaOvNjS-cV-ketpe3JLhsxyjVN6hA8C3Lqf_pHXI.IfRcIv3Fyqee1hIfgLpFDHTGTz-H_3COYZfdl_v_ZEs&dib_tag=se&keywords=food+truck+hat&qid=1746659825&sprefix=food+truck+hat%2Caps%2C143&sr=8-15",
      },
      {
        img: "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C810KBg0%2BnsL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX425_.png",
        link: "https://www.amazon.com/Funny-Food-Truck-Street-T-Shirt/dp/B0C149ZVLZ/ref=sr_1_12_sspa?crid=1ML17A983KV41&dib=eyJ2IjoiMSJ9.A6eq3YtlLckhGbyUptbe0xhZpNIZiu_S6ploBNZdxN-ZVcXx6Us_3xnf-RxM33qFPdUt4hyeOtWLSufI-w48M7mPX9MQ7ScnwZcKtGL-D6KkgZdGM0VbDynQFHGtOkcyAFFfLZsRdNXxc9Ukw59D5AaT_9kXYrzuS9v1n-2y1KFdhonfzMcTTHhKDKybSXkUJiLlxYr6933H6fMufBZBPdSYJ7oe83FYYS3nRcK1-G3yf141Alz7LVxGsemPVLI0pRACMG7nTHcTNB87ZBCv5896LQzyJlB_ukCU_xPaPq4.4UAqUnlIaO4h4jZRT507cPNjdJ4i8mUUJSTZ-yveyMM&dib_tag=se&keywords=food+truck+accessories&qid=1746663910&sprefix=food+truck+%2Caps%2C151&sr=8-12-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1",
      },
      {
        img: "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C81jEvHPvn0L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX425_.png",
        link: "https://www.amazon.com/dp/B0CDNXRWCB/ref=sspa_dk_detail_2?pd_rd_i=B0CDNXRWCB&pd_rd_w=2XaNb&content-id=amzn1.sym.7446a9d1-25fe-4460-b135-a60336bad2c9&pf_rd_p=7446a9d1-25fe-4460-b135-a60336bad2c9&pf_rd_r=07TQ8N6P40280QP61VRG&pd_rd_wg=3KVu6&pd_rd_r=e89f99b4-90f4-441b-b399-9de113ad92f1&s=apparel&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw&customId=B0752XJYNL&customizationToken=MC_Assembly_1%23B0752XJYNL&th=1&psc=1",

      },
      {
        img: "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C71PLMdlzZtL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX425_.png",
        link:"https://www.amazon.com/Food-Truck-Shirt-Lover-T-Shirt/dp/B09TS7FXB3/ref=sr_1_38?crid=ENN3KHY6SYL8&dib=eyJ2IjoiMSJ9.5NrlLrh8xFBZriUbcfuFUgdkdbioTHfYqXmYkFmhyyMEOO0OzSGbdKSVBRMFT-ewLliB1xe0yFampjC-SB7soiyLHnc-Er2Jw5YqYZCPg3bFxbJI_jVrMWlfWlK9w2wwjuvnNFsXtVYVM6H_h-g466VYLC_ZL2Jrn2gDr6-t-WG_DHwlxzQZdVdh5qpAQWlibn7ObVhmteDB8pRMb4gj4A_21YXV2tiB0ACGtjDSk7RDisD8_m3zZ3Hb10zxyvNxAEKTXrv-_dBWz-7V4LD3_3JKqTb4EC4x2P1zX9wDmqo.pnqaMv4F5hOkFltMls3ymsEXnfwDUwzH9YZdt0w1zlk&dib_tag=se&keywords=food+truck+hats&qid=1746663961&sprefix=food+truck+hats%2Caps%2C147&sr=8-38",
      },
    ],
    carousel2: [
      {
        img: "https://m.media-amazon.com/images/I/71KpDl0PkHL._AC_SX679_.jpg",
        link:"https://www.amazon.com/PACIFIC-BRIM-Classic-Baseball-Adjustable/dp/B0CCK9NGH5/ref=sr_1_5?crid=15ATMZQRBWWVG&dib=eyJ2IjoiMSJ9.90_524QEey2h2mSm8XJk4KG0fo8q9eb5KD5IhwcAhwJzwagCmzKQTQfgoJkKI9_reT5xzvzQC20eW9gDYejrHjZ_tPPgmmZGY0baHd0_Hne3RnWZABKjLScz-g_tkS9IveMAgb0rH-7wtLI1jeSaiXTJRseF-9oPkvyH2insHIjZ9hjrj4y5wN345Cm5hxcZjEGCVoWVruqGfut4ZKmK_bzm2aeK8NhgM86U359J7HLG7O-U6eQv9EGja8byFPsP19bHznUqW4nElRbaqG5eydIvTH5JcLAKNqUmUL6t0yw.-L73dwi9iB8rxPYYWUQdchEHMqXMOT_K3LxvvAWb3OU&dib_tag=se&keywords=foodie+hats&qid=1746660106&sprefix=foodie+hats%2Caps%2C151&sr=8-5",
      },
      {
        img: "https://m.media-amazon.com/images/I/61sSkL-AFrL._AC_SX679_.jpg",
        link:"https://www.amazon.com/Funny-Party-Hats-Food-Cheeseburger/dp/B01A1D3P2A/ref=sr_1_27?crid=QMRSD9C52ZL4&dib=eyJ2IjoiMSJ9.90_524QEey2h2mSm8XJk4KG0fo8q9eb5KD5IhwcAhwJzwagCmzKQTQfgoJkKI9_reT5xzvzQC20eW9gDYejrHjZ_tPPgmmZGY0baHd0_Hne3RnWZABKjLScz-g_tkS9IveMAgb0rH-7wtLI1jeSaiXTJRseF-9oPkvyH2insHIjZ9hjrj4y5wN345Cm5hxcZjEGCVoWVruqGfut4ZKmK_bzm2aeK8NhgM86U359J7HLG7O-U6eQv9EGja8byFPsP19bHznUqW4nElRbaqG5eydIvTH5JcLAKNqUmUL6t0yw.-L73dwi9iB8rxPYYWUQdchEHMqXMOT_K3LxvvAWb3OU&dib_tag=se&keywords=foodie+hats&qid=1746660157&sprefix=foodie+hats%2Caps%2C160&sr=8-27",
      },
      {
        img: "https://m.media-amazon.com/images/I/71m+Z7j8o-L._AC_SX679_.jpg",
        link:"https://www.amazon.com/dp/B0C53C9K8N/ref=sspa_dk_detail_1?psc=1&pd_rd_i=B0C53C9K8N&pd_rd_w=OMetw&content-id=amzn1.sym.7446a9d1-25fe-4460-b135-a60336bad2c9&pf_rd_p=7446a9d1-25fe-4460-b135-a60336bad2c9&pf_rd_r=13DMR1XSVD61PQE34QVK&pd_rd_wg=fIdtA&pd_rd_r=f5762378-37a8-4e80-a3bd-1bb046389516&s=toys-and-games&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw",
      },
      {
        img: "https://m.media-amazon.com/images/I/713bk9E-5GL._AC_SX679_.jpg",
        link:"https://www.amazon.com/Romantic-Taco-Truck-Food-White/dp/B076YQ96DQ/ref=sr_1_23?crid=ENN3KHY6SYL8&dib=eyJ2IjoiMSJ9.5NrlLrh8xFBZriUbcfuFUgdkdbioTHfYqXmYkFmhyyMEOO0OzSGbdKSVBRMFT-ewLliB1xe0yFampjC-SB7soiyLHnc-Er2Jw5YqYZCPg3bFxbJI_jVrMWlfWlK9w2wwjuvnNFsXtVYVM6H_h-g466VYLC_ZL2Jrn2gDr6-t-WG_DHwlxzQZdVdh5qpAQWlibn7ObVhmteDB8pRMb4gj4A_21YXV2tiB0ACGtjDSk7RDisD8_m3zZ3Hb10zxyvNxAEKTXrv-_dBWz-7V4LD3_3JKqTb4EC4x2P1zX9wDmqo.pnqaMv4F5hOkFltMls3ymsEXnfwDUwzH9YZdt0w1zlk&dib_tag=se&keywords=food%2Btruck%2Bhats&qid=1746663961&sprefix=food%2Btruck%2Bhats%2Caps%2C147&sr=8-23&th=1&psc=1",
      },
    ],
    carousel3: [
      {
        img: "https://m.media-amazon.com/images/I/912k353WNSL._AC_SX569_.jpg",
        link:"https://www.amazon.com/KiNSFUN-Metal-Truck-Pullback-Action/dp/B013RV1P48/ref=sr_1_2?crid=28JSY2E3BN7YW&dib=eyJ2IjoiMSJ9.v0pwzjLu623qQ_FuoKr1h2qfQMqHQVu8ypNDO4Avp6CiwGgtwpFHYVeMYkihH5eb85MVKS0FLkfvUT26cxffiyN9Db-DhsrqDSyw0XkwTulaxSZMDUk0oHj7OdyPj3NjgwUnpndX3P1fDlvN8HIiqkSHJennvSeWHe-XmAgtka6I_lqCfta2fZLjwppKDW3smh221Afm0hCktMpYe_uf04JMUvfXBXiSAGm7YxKxLVbvl__4iVVsl1TMvvji_fToYrr3cPRfezDC3_e1avRlrjXIPQcpD3rE3HuxzsRVlwQ.P_tr50tGTTHPSzVp-DMdAyoTK_VNhKei55_J2QX7Dlg&dib_tag=se&keywords=food+truck+merch&qid=1746659947&sprefix=food+truck+merch%2Caps%2C138&sr=8-2",
      },
      {
        img: "https://m.media-amazon.com/images/I/61XZPILUTeL._AC_SX522_.jpg",
        link:"https://www.amazon.com/ArtCreativity-Keychains-Sandwich-Keychain-Accessories/dp/B09F7QRVKZ/ref=sr_1_1_sspa?crid=26T1P82Q2QAGL&dib=eyJ2IjoiMSJ9.Y33fKJKkqwsva6oi8ieF15KAogquP6RI2TcoDIJ84-hjVP9KZt1f9o2pTvg676hk3PtPu3GpUNyk8jpJ7STkO_dbV-FwdIIrhX7TxSp16cCTyg2NhlfjsJ-s_kGYYLXPSB1W6mk88s6ci0hA3PLl37GotHUcyiFmpLAzYXTCeb24fSS1gPIIQGksCBOUsywEOqvMn3elWshVSEGCluJhjaOi5nn19Ke0OuLSS-_tkx_Zwg1kDUgyGUTyb88NZ-AVYHrYq-5-nXr0gk6LFkOOxO6mbEheXb5ZOcr1lbrDuAU.ANMmun2fuXaHncCTwx1GcwIiFtSlef_P8tsF-sc7lN8&dib_tag=se&keywords=food+truck+key+chain&qid=1746663786&sprefix=food+truck+key%2Caps%2C141&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
      },
      {
        img: "https://m.media-amazon.com/images/I/71ATKn4PF-L._AC_SX569_.jpg",
        link:"https://www.amazon.com/Fisher-Price-Musical-Toddler-Vehicle-Preschool/dp/B0CPMZMB9C/ref=sr_1_15?crid=2YV2W708TYGB7&dib=eyJ2IjoiMSJ9.S-nnyL4DKECxi21FV9PATaLuXYwJRmbCB-0Hx4Pg1qu5jdNDr1UZbjQWPKQXjmtB3ryW0C-kGcTewI5AnoMmwH4gYFZ83QR4kr29TZ6WJorAl8uE3FoHJadvbD7TDANJMMEfqtOmGMagbdVHB9gZZm6lWMehy2IGvUGjXRXiwsR9ttPRfU1Y-0xcmPHwynt7hUzBMQCXmAulUHvp-QLDRu2Osi4f2eHx2pGvqjAsPS33yuIAijpnQ_ZUJq_XyEmVG0Z9nTPc2MtlYWBUNlRRndBCBbs9y8tyJsyjtanwMDM.01iGTu5i8J7m75jcETEq1snbdzBdS7hSb-KactJY1k0&dib_tag=se&keywords=food+truck+toys&qid=1746663846&sprefix=food+truck+toy%2Caps%2C159&sr=8-15",
      },
      {
        img: "https://i.imgur.com/pfizPoC.png",
        link:"https://www.amazon.com/Food-Truck-Junkie-Stainless-Bottle/dp/B098FKDB36/ref=sr_1_8?crid=1MLE3S13KU13Q&dib=eyJ2IjoiMSJ9.ldBnTkx-99z-Kq9bhvzy1hFP-GrqJQkfd5ALFEiCVkJ0jUu5Z3Is6mAIsyZv7i9AnJY0C8jPAzx76IJOLKczRfoW6zqmPHZFfvJCo1cSd3eNvgvZhC0MijeV2ISL20G8ivjFYEn3WrR2gZVfE6WTSLF7aIz1SKy9PdpJ2LZgpoY26oo2wJC_foSp4U8M30yeW3Dfu3IpaOXeutwk0aQeF2mCv2zkIx4ClblsaHI-7UaWDoFW5DDYiT0W4idBz3b51TRJzwbgYC8z2IFjDoQx09WVyqPNsrDjqO4QSH0KFV8.p1xjVFk7gSGB5BSP7RFEO-9VHUyUoAIlViaC2pfsqR0&dib_tag=se&keywords=food+truck+water+bottle&qid=1746664121&sprefix=ford+truck+water+bottl%2Caps%2C142&sr=8-8",
      },
    ],
        carousel4: [
      {
        img: "https://m.media-amazon.com/images/I/71mSvHqQCpL._AC_SX569_.jpg",
        link:"",
      },
      {
        img: "https://m.media-amazon.com/images/I/81k0DIZ0UFL._AC_SX569_.jpg",
        link:"",
      },
      {
        img: "https://m.media-amazon.com/images/I/814VGYGNBpL._AC_SX679_.jpg",
        link:"",
      },
    ],
  });

  return (
    <>
    <div className="merchTitle"
      style={{background:"linear-gradient(0deg,rgba(163, 13, 13, 1) 0%, rgba(220, 53, 69, 1) 100%)"}}
    >
    <h2 className="mb-0">Shirts</h2>
    </div>
      <Carousel merch={merch.carousel1} order={1} />
   <div className="merchTitle2 mb-0"
   style={{background:"linear-gradient(0deg,rgba(163, 13, 13, 1) 0%, rgba(220, 53, 69, 1) 100%)"}}
   >
    <h2 className="mb-0">Hats</h2>
    </div>
      <Carousel merch={merch.carousel2} order={2} />
<div className="merchTitle3"
  style={{background:"linear-gradient(0deg,rgba(163, 13, 13, 1) 0%, rgba(220, 53, 69, 1) 100%)"}}
>
    <h2 className="mb-0">Toys & Goodies</h2>
    </div>
      <Carousel merch={merch.carousel3} order={3} />
<div className="merchTitle4"
style={{background:"linear-gradient(0deg,rgba(163, 13, 13, 1) 0%, rgba(220, 53, 69, 1) 100%)"}}
>
    <h2 className="mb-0">Stickers</h2>
    </div>
      <Carousel merch={merch.carousel4} order={4} />
    </>
  );
};
