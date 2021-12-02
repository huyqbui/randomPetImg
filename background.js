const petimgs = [
    "https://in1li1tgpn-flywheel.netdna-ssl.com/wp-content/uploads/2011/05/tuna-the-chiweenie-derpy-dog-overbite-cute.jpg", 
    "https://mojly.com/wp-content/uploads/2018/02/animals-goofy-dog-pics-photo-gallery-cute-09-derpy-dogs.jpg",
    "https://qph.fs.quoracdn.net/main-qimg-5575209a60c63fdf0129ac23eef1c24e-c",
    "https://sadanduseless.b-cdn.net/wp-content/uploads/2019/05/funny-corgi-butts4.jpg",
    "https://img-9gag-fun.9cache.com/photo/ayeR6mb_460s.jpg",
    "https://static.boredpanda.com/blog/wp-content/uploads/2020/01/fluffy-new-grumpy-cat-5e2e949a6c8b0__700.jpg",
    "http://pm1.narvii.com/7197/6f9d54b0beda7f66ac1715b295598ae1b934808fr1-678-752v2_00.jpg",
    "https://www.thesprucepets.com/thmb/6XaeIv6QaYXp-1u2Snx__88d_Lw=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Stocksy_txpba7ef914jvq100_Medium_1493631-5a8ef3d404d1cf003616d6f3.jpg",
    "https://wallpaperaccess.com/full/428160.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-photos-of-cats-sleeping-arms-1593184782.jpg",
    "https://i.ytimg.com/vi/WSsl4rE_qro/maxresdefault.jpg",
    "https://media.timeout.com/images/105634590/image.jpg",
    "https://cdn.wionews.com/sites/default/files/styles/story_page/public/2021/05/12/194655-oof-1.jpg",
    "https://purrpetrators.com/wp-content/uploads/2018/08/m2.jpg",
  ]


const imgs = document.getElementsByTagName("img");

function random(){
    return Math.floor(Math.random() * (petimgs.length - 1));
  }

for (let i = 0; i < imgs.length; i++){
    imgs[i].src = `${petimgs[random()]}`;
    imgs[i].style.height = '200px';
}