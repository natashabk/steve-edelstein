const url = "https://res.cloudinary.com/badgerdad/image/upload/"
const ids = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"]

const imgLinks= {
  "birds1": ids.map(id=> `${url}Birds1/${id}.jpg`),
  "birds2": ids.map(id=> `${url}Birds2/${id}.jpg`),
  "street1": ids.map(id=> `${url}Street1/${id}.jpg`),
  "street2": ids.map(id=> `${url}Street2/${id}.jpg`)
}

export default imgLinks;