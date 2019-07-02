let captions = {};
const url = "https://res.cloudinary.com/badgerdad/image/list/";

function fetchCaptions() {
  ["streetsampler"].forEach(tag=> {
    captions[tag] = {}
    fetch(`${url}${tag}.json`)
    .then(resp => resp.json())
    .then(resp => {
      resp.resources.forEach(image => {
        let id = (image.public_id.slice(17) - 1).toString();
        let caption="No caption";   
        captions[tag][id]= caption
      });
    })
  })
  return captions;
}

export default fetchCaptions;
