const CB = "https://res.cloudinary.com/dwiylkbgg/image/upload/";

export interface ShowData {
  label: string;
  images: string[];
  externalLink?: string;
}

export const SHOWS: Record<string, ShowData> = {
  "Once Upon A Mattress": {
    label: "Once Upon A Mattress",
    images: [
      `${CB}53934651035_6b7a68ac3e_k_1_fmsseg.jpg`,
      `${CB}53934650870_c9813a8816_k_duseyc.jpg`,
      `${CB}53934651355_8936a601a7_k_wzdbn0.jpg`,
      `${CB}53934442578_b7fe489f4b_k_1_ldy22i.jpg`,
      `${CB}53933294882_7464fa457e_k_1_mvfact.jpg`,
      `${CB}53934442448_91916ba6ac_k_1_wtobii.jpg`,
      `${CB}53934531244_b51020f8ca_k_shhihy.jpg`,
      `${CB}53934531069_3252f178c2_k_1_hlf0hq.jpg`,
      `${CB}53934531149_3ecbd2ef42_k_1_h9bo5a.jpg`,
      `${CB}53934531224_98441499a4_k_1_naai8e.jpg`,
      `${CB}53934651275_f4c4747e49_k_m1lwzm.jpg`,
      `${CB}53934651290_ed763aa161_k_znwofy.jpg`,
      `${CB}53934530894_db38128da4_k_1_vkxep1.jpg`,
      `${CB}53934442608_714b7ef14f_k_lhobke.jpg`,
      `${CB}53933294502_f6733249cf_k_tgzam4.jpg`,
    ],
  },
  "She Loves Me": {
    label: "She Loves Me",
    images: [
      `${CB}53937512827_1a01d4a84f_k_ifxmov.jpg`,
      `${CB}53938750879_0c6e738f1f_k_i7eds8.jpg`,
      `${CB}53938872015_9e4be1b86e_k_c9cpef.jpg`,
      `${CB}53938872295_897dd5946a_k_gmridu.jpg`,
      `${CB}53938871765_4c739055a3_k_nz2ahc.jpg`,
      `${CB}53938666393_ba98d965cc_k_kg1jao.jpg`,
      `${CB}53937512422_d95724ce68_k_hxsao4.jpg`,
      `${CB}53938665908_96a44f4e36_k_elzeoz.jpg`,
      `${CB}53938666113_f135c921e8_k_la3zlx.jpg`,
      `${CB}53938750609_39a2b36f7a_k_wdaxc6.jpg`,
    ],
  },
  "It Looks Like This": {
    label: "It Looks Like This",
    images: [
      `${CB}9-IMG_0052_s7dsji.jpg`,
      `${CB}7-IMG_0024_brg4xd.jpg`,
      `${CB}3-IMG_9990_tfargn.jpg`,
      `${CB}14-IMG_1333_mzfd6i.jpg`,
      `${CB}8-IMG_0029_pse27v.jpg`,
      `${CB}6-IMG_0010_ylxfay.jpg`,
      `${CB}4-IMG_9993_a9rw0d.jpg`,
      `${CB}1-IMG_9971_mq0vmg.jpg`,
      `${CB}10-IMG_0058_xgmheb.jpg`,
      `${CB}25-IMG_1423_dkp3gk.jpg`,
      `${CB}23-IMG_1407_luxdcy.jpg`,
      `${CB}26-IMG_1428_xu9qvc.jpg`,
      `${CB}27-IMG_1432_z1zgkq.jpg`,
    ],
  },
  "Alice By Heart": {
    label: "Alice By Heart",
    images: [
      `${CB}ABHWestWords_mmymfx.jpg`,
      `${CB}ABHRippingPages_ihqgi3.jpg`,
      `${CB}ABHSickBeginning_debqzp.jpg`,
      `${CB}ABHTree_rw1kv3.jpg`,
      `${CB}ABHBombing_jag7jw.jpg`,
      `${CB}ABHSickToDeathLift_p3nt73.jpg`,
      `${CB}ABHTrialWide_efsboq.jpg`,
      `${CB}ABHDistantLook_d5xd07.jpg`,
      `${CB}ABHAngrySickToDeath_jhb2lv.jpg`,
    ],
  },
  "A Funny Thing...": {
    label: "A Funny Thing...",
    images: [],
  },
  "Award-Winning Short Film": {
    label: "Award-Winning Short Film",
    images: [],
    externalLink: "https://youtu.be/_C0LGUstsng",
  },
};