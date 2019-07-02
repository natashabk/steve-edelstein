const url = "https://res.cloudinary.com/badgerdad/image";
let ids = [];
let featuredIDs = [];
let i;

for (i = 1; i < 25; i++) ids.push(i.toString());
for (i = 1; i < 12; i++) featuredIDs.push(i.toString());

const imgLinks = {
  featured: featuredIDs.map(id => `${url}/upload/Featured/f--${id}.jpg`),
  birds1: ids.map(id => `${url}/upload/Birds1/1--${id}.jpg`),
  birds2: ids.map(id => `${url}/upload/Birds2/2--${id}.jpg`),
  birds3: ids.map(id => `${url}/upload/Birds3/3--${id}.jpg`),
  street1: ids.map(id => `${url}/upload/Street%20Sampler/s-${id}.jpg`),
};

export default imgLinks;
