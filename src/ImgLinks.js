const url =
  "https://res.cloudinary.com/das8diykm/image/upload/v1559842107/Edelstein/";
const ids = [
  "Snowy_Egret_1",
  "Great_Egret_9",
  "Great_Egret_6",
  "Great_Egret_7",
  "Great_Egret_Family_1",

  "Great_Egret_Family_2",
  "Great_Egret_Family_3",
  "Great_Egret_Family_4",
  "Great_Egret_Chicks_1",
  "Blended_Family_1",

  "Great_Egret_5",
  "Great_Egret_4",
  "Great_Egret_3",
  "Great_Egret_1",
  "Great_Egret_8",

  "Snowy_Egret_2_copy",
  "Snowy_Egret_3",
  "Wood_Stork_2",
  "Wood_Stork_3",
  "White_Ibis_1",

  "Great_Blue_Heron_2",
  "Little_Blue_Heron_4",
  "Little_Blue_Heron_7",
  "Little_Blue_Heron_2",
  "Little_Blue_Heron_3",

  "Little_Blue_Heron_1",
  "Little_Blue_Heron_6",
  "Tricolored_Heron_1",
  "Great_Blue_Heron_1",
  "Eastern_Blue_Bird_1",

  "Eastern_Blue_Bird_3_copy",
  "Ring-Billed_Gull_1 ",
  "Ring-Billed_Gull_2",
  "Laughing_Gull_1",
  "Hooded_Merganser_1",

  "Willet_1",
  "Western_Sandpiper_1",
  "Black-Bellied_Plover_1",
  "Black_Skimmer_1",
  "Bald_Eagle_4",

  "Bald_Eagle_2",
  "Bald_Eagle_3",
  "Bald_Eagle_1",
  "Marbled_Godwit_1",
  "Northern_Cardinal_1",

  "Northern_Cardinal_2",
  "Red_Headed_Woodpecker_1",
  "Anhinga_3",

  // "Willet_2",
  // "Eastern_Blue_Bird_2",
  // "Great_Egret_2",
  // "White_Ibis_2",
  // "Wood_Stork_1",
  // "Great_Egret_in_Tree",
  // "little_blue_heron_5",
];

const imgLinks = ids.map(id => `${url}${id}.jpg`);

export default imgLinks;
