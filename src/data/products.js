const products = [
    {
        name: 'Pereskiopsis sp.',
        image: './thumb-images/williamsii.jpg',
        fullImage: './images/williamsii.jpg',
        description: 'Grafting stock',
        size: '10 X 10 cm unrooted cutting',
        price: 'R 50',
        availability: 'available'
    },
    {
        name: 'H. coladamononis, grafted',
        image: './thumb-images/croucheri.jpg',
        fullImage: './images/croucheri.jpg',
        description: 'Meet the captivating Monkey`s Tail Cactus, scientifically known as Cleistocactus winteri. Native to the high-altitude regions of South America, this succulent marvel boasts long, trailing stems adorned with clusters of spines resembling a playful monkey`s tail.',
        size: 'Various lengths cutting',
        price: 'R 120 / 10 cm',
        availability: 'unavailable'
    },
    {
        name: 'G. bruchii, grafted',
        image: './thumb-images/croucheri.jpg',
        fullImage: './images/croucheri.jpg',
        description: 'Gymnocalycium bruchii s a miniature clumping succulent that clusters when small. This species is very variable. It is a summer grower species that is easy to cultivate. It is one of the most cold-tolerant South American species. It can grow outdoors and is hardy to -15° C or even less.',
        size: '3 cm scion',
        price: 'R 80',
        availability: 'available'
    },
    {
        name: 'E. grusonii, grafted',
        image: './thumb-images/croucheri.jpg',
        fullImage: './images/croucheri.jpg',
        description: 'Mother-in-law`s cushion, is a species of barrel cactus which is endemic to east-central Mexico. It is rare and endangered in the wild, where it is found near Mesa de León in the state of Querétaro, and in the state of Hidalgo.',
        size: '5 cm scion',
        price: 'R 30',
        availability: 'available'
    },
    {
        name: 'L. williamsii "caespitosa", grafted',
        image: './thumb-images/croucheri.jpg',
        fullImage: './images/croucheri.jpg',
        description: 'Solitary and clumping (caespitose) are both present in habitat and grows in an area that stretches from from the Chihuahuan Desert to the South Texas Plains, on either side of the middle and lower Rio Grande River, southward to the Mexican states of Chihuahua, Coahuila, Durango, Nuevo León, San Luis Potosí, Tamaulipas, Zacatecas.',
        size: '5 cm scion, multiple heads',
        price: 'R 120',
        availability: 'available'
    },
    {
        name: 'S. heinzii, grafted',
        image: './thumb-images/croucheri.jpg',
        fullImage: './images/croucheri.jpg',
        description: 'Known for its vibrant colors and compact, clustered growth, this Bolivian beauty is the perfect addition to any home or garden.',
        size: '3 cm scion',
        price: 'R 75',
        availability: 'available'
    },
    {
        name: 'L. jourdaniana',
        image: './thumb-images/croucheri.jpg',
        fullImage: './images/croucheri.jpg',
        description: 'Lophophora jourdaniana, commonly known as peyote, is a small, spineless cactus native to the southwestern regions of North America, particularly in Mexico and parts of Texas. It belongs to the family Cactaceae. The plant has a distinctive appearance, characterized by its rounded, button-like shape, usually greenish-gray or bluish-green in color.',
        size: '3.5 cm scion',
        price: 'R 150',
        availability: 'available'
    },
    {
        name: 'L. williamsii, grafted',
        image: './thumb-images/croucheri.jpg',
        fullImage: './images/croucheri.jpg',
        description: 'Small, hemispherical, spineless, fleshy cactus with the low rounded sections bearing a tuft of yellow-white hairs at the apex. Naturally grows in gravel like clay and loam soils on gentle slopes and needs part shade.',
        size: '3 cm scion',
        price: 'R 100',
        availability: 'available'
    },
    {
        name: 'S. divinorum',
        image: './thumb-images/croucheri.jpg',
        fullImage: './images/croucheri.jpg',
        description: 'Dive into the fascinating realm of Salvia divinorum, a distinctive member of the mint family (Lamiaceae). Native to the cloud forests of Mexico, this perennial herb captivates botanists with its lush green leaves, square stems, and intricate flowering structures. ',
        size: '15 cm cuting, sold in pot',
        price: 'R 50',
        availability: 'available'
    },
    {
        name: 'M. speciosa, "Red vein"',
        image: './thumb-images/croucheri.jpg',
        fullImage: './images/croucheri.jpg',
        description: 'Revered for its unique alkaloids, Kratom has been traditionally used for its diverse properties. Explore the potential benefits and make Kratom a part of your wellness journey.',
        size: '15 cm cutting, sold in bag',
        price: 'R 400',
        availability: 'unavailable'
    },
    {
        name: 'L. jourdaniana "pale flower", grafted',
        image: './thumb-images/croucheri.jpg',
        fullImage: './images/croucheri.jpg',
        description: 'Lophophora jourdaniana, with pale flower where normally it is a deep pink, is a small, spineless cactus native to the southwestern regions of North America, particularly in Mexico and parts of Texas. The plant has a distinctive appearance, characterized by its rounded, button-like shape, usually greenish-gray or bluish-green in color.',
        size: '3.5 cm scion',
        price: 'R 150',
        availability: 'available'
    },
    {
        name: 'H. coladamononis',
        image: './thumb-images/croucheri.jpg',
        fullImage: './images/croucheri.jpg',
        description: 'A rare, spherical cactus with beautiful golden spines. Prefers well-draining soil and partial sunlight.',
        size: 'Various lengths cutting, rooted',
        price: 'R 120 / 10 cm',
        availability: 'available'
    },
    {
        name: 'T. bridgesii "monstrose short form"',
        image: './thumb-images/croucheri.jpg',
        fullImage: './images/croucheri.jpg',
        description: 'A rare, spherical cactus with beautiful golden spines. Prefers well-draining soil and partial sunlight.',
        size: '3.5 cm scion',
        price: 'R 120',
        availability: 'available'
    },
    {
        name: 'T. bridgesii "monstrose long form"',
        image: './thumb-images/croucheri.jpg',
        fullImage: './images/croucheri.jpg',
        description: 'A rare, spherical cactus with beautiful golden spines. Prefers well-draining soil and partial sunlight.',
        size: '3.5 cm scion',
        price: 'R 120',
        availability: 'unavailable'
    },
    {
        name: 'P. aseliformis crested, grafted',
        image: './thumb-images/croucheri.jpg',
        fullImage: './images/croucheri.jpg',
        description: '',
        size: '2 cm scion',
        price: 'R 600',
        availability: 'unavailable'
    },
    {
        name: 'S. tortuosum',
        image: './thumb-images/croucheri.jpg',
        fullImage: './images/croucheri.jpg',
        description: 'An indigenous South African succulent plant with a rich cultural history. Also known as Kanna, this fascinating herb has been traditionally used for its mood-enhancing properties.',
        size: '3.5 cm scion',
        price: 'R 120',
        availability: 'available'
    },
    // Add other products here...
];

export default products;