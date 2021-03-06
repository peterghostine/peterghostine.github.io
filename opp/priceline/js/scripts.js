const imgGallery = [
	['New York', 'https://assets.pclncdn.com/web/next-landing/c7ebcead/_next/static/images/new-york-city-ef179cdee55fdfea4dd59b401b23a904.jpg'],
	['Los Angeles', 'https://assets.pclncdn.com/web/next-landing/c7ebcead/_next/static/images/los-angeles-c95bf6438b19d05d7a108c8747178b68.jpg'],
	['Orlando', 'https://assets.pclncdn.com/web/next-landing/c7ebcead/_next/static/images/orlando-034ac4ea085582e9e4b95abd9e392bc8.jpg'],
	['Atlanta', 'https://assets.pclncdn.com/web/next-landing/c7ebcead/_next/static/images/atlanta-91415d66851175129f889d27f9f568a4.jpg'],
	['Dallas', 'https://assets.pclncdn.com/web/next-landing/c7ebcead/_next/static/images/dallas-a729d06ad0b7fc9b3fdec23533a8a2da.jpg'],
	['San Francisco', 'https://assets.pclncdn.com/web/next-landing/c7ebcead/_next/static/images/san-francisco-7de36c9d7d49993d020c0628c880b256.jpg'],
	['Miami', 'https://assets.pclncdn.com/web/next-landing/c7ebcead/_next/static/images/miami-6ea7a135a72b075e2fd3d7544b4279e8.jpg'],
	['Denver', 'https://assets.pclncdn.com/web/next-landing/c7ebcead/_next/static/images/denver-7490a37761cf8d417b8f6c6d8f8f90c7.jpg'],
	['Seattle', 'https://assets.pclncdn.com/web/next-landing/c7ebcead/_next/static/images/seattle-ff5921903dc8fa12860caa47339b1999.jpg'],
	['San Diego', 'https://assets.pclncdn.com/web/next-landing/c7ebcead/_next/static/images/san-diego-990b784ec75d983ee6f2b232c02fdf83.jpg']
]

let el;

const populateCities = () => {
    for (let i = 0; i <= imgGallery.length; i++) {
	    el = document.getElementById('city' + (i + 1));
	    el.innerHTML = `<img src="${imgGallery[i][1]}" class="city-img" alt="${imgGallery[i][0]}">`;
	};
};

populateCities();