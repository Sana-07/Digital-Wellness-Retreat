document.addEventListener("DOMContentLoaded", function() {
    const scheduleData = {
           "mindfulness": [
            { date: "2024-07-10", time: "10:00 AM - 12:00 PM", location: "Room 101", details: "Introduction to Mindfulness", image: "https://i.pinimg.com/originals/4a/87/21/4a872110cf61eb026ab862e0b83aced6.png" },
            { date: "2024-07-11", time: "2:00 PM - 4:00 PM", location: "Room 101", details: "Mindfulness Meditation Practices", image: "https://www.shutterstock.com/shutterstock/photos/2237207145/display_1500/stock-vector-meditation-practice-forms-set-zen-yoga-chakra-transcendental-mantra-and-vipassana-meditation-2237207145.jpg" },
            { date: "2024-07-12", time: "9:00 AM - 11:00 AM", location: "Room 101", details: "Advanced Mindfulness Techniques", image: "https://avatars.mds.yandex.net/i?id=f30aab748e6a1967e0bcbf4514666961524f4d27-8497423-images-thumbs&n=13" },
            { date: "2024-07-13", time: "10:00 AM - 12:00 PM", location: "Room 101", details: "Mindful Breathing Exercises", image: "https://avatars.mds.yandex.net/i?id=0abb9ecdf5c3072705d1a0fc64ea17929385f103-5131517-images-thumbs&n=13" },
            { date: "2024-07-14", time: "1:00 PM - 3:00 PM", location: "Room 101", details: "Mindfulness and Stress Reduction", image: "https://cdn.quotesgram.com/img/27/94/1633516969-Stress_Reduction_Methods.jpg" }
        ],
        "detox": [
            { date: "2024-07-12", time: "9:00 AM - 11:00 AM", location: "Room 12", details: "Digital Detox Introduction", image: "https://i.pinimg.com/originals/72/ff/8f/72ff8fe0c6d42302e3c62d16cf709ec7.jpg" },
            { date: "2024-07-13", time: "3:00 PM - 5:00 PM", location: "Room 13", details: "Nature Walk and Meditation", image: "https://avatars.mds.yandex.net/i?id=255b0dacb5e9b004906892bbde3fcbe007e6372a-10401675-images-thumbs&n=13" },
            { date: "2024-07-14", time: "10:00 AM - 12:00 PM", location: "Room 14", details: "Digital Detox Techniques", image: "https://avatars.mds.yandex.net/i?id=2e6120b74f2266fe47f64824a6732294ff5a53e31f6329ba-12248382-images-thumbs&n=13" },
            { date: "2024-07-15", time: "2:00 PM - 4:00 PM", location: "Room 15", details: "Mindful Disconnect", image: "https://avatars.mds.yandex.net/i?id=9fd36d2f3a2419f78eac36771390e219cd140cca0ebe05af-12630754-images-thumbs&n=13" },
            { date: "2024-07-16", time: "11:00 AM - 1:00 PM", location: "Room 16", details: "Digital Minimalism", image: "https://lh6.googleusercontent.com/A--O5L2PSvdpfFMrZzbCWNMXPkywQzKVLXKI-59i5jLEu207HpJb4LR8L5Jac2xA8dPh8NtMqIfKP4Dl_kQzrb8DuOMlT85aR4lyLt_3ZfArAYlszEqyx_hL3GUYXKQmAWNOajibWZh6iWF-kw" }
        ],
        "holistic": [
            { date: "2024-07-14", time: "11:00 AM - 1:00 PM", location: "Room 202", details: "Holistic Health Overview", image: "https://avatars.mds.yandex.net/i?id=7a70092daec88830cc8a897efcd3b76e1b772940-8178526-images-thumbs&n=13" },
            { date: "2024-07-15", time: "1:00 PM - 3:00 PM", location: "Room 202", details: "Holistic Nutrition Workshop", image: "https://avatars.mds.yandex.net/i?id=f1297a2f61d5a594ffdeffa566160e18002892a4-11923369-images-thumbs&n=13" },
            { date: "2024-07-16", time: "9:00 AM - 11:00 AM", location: "Room 202", details: "Holistic Living Practices", image: "https://postnewsgroup.com/wp-content/uploads/2020/01/Holistin-Health.-.png" },
            { date: "2024-07-17", time: "10:00 AM - 12:00 PM", location: "Room 202", details: "Holistic Healing", image: "https://avatars.mds.yandex.net/i?id=2d721d8346ccb2b50ce6517d5a0ac9abf7a9d475-9266552-images-thumbs&n=13" },
            { date: "2024-07-18", time: "2:00 PM - 4:00 PM", location: "Room 202", details: "Integrative Health", image: "https://avatars.mds.yandex.net/i?id=9e98f86863d16d5f2aa3bb5d1785e44408f18269-10855021-images-thumbs&n=13" }
        ],
        "stress": [
            { date: "2024-07-16", time: "10:00 AM - 12:00 PM", location: "Room 103", details: "Stress Management Techniques", image: "https://avatars.mds.yandex.net/i?id=3c4f56f500e882a807abd3eb9560e3d3-4600903-images-thumbs&n=13" },
            { date: "2024-07-17", time: "2:00 PM - 4:00 PM", location: "Room 103", details: "Relaxation and Mindfulness", image: "https://dhammadiparama.com/wp-content/uploads/2023/03/Weekend-Mindful-Relaxation-Batch-2-1-819x1024.webp" },
            { date: "2024-07-18", time: "11:00 AM - 1:00 PM", location: "Room 103", details: "Yoga for Stress Relief", image: "https://i.ytimg.com/vi/HI-hKN-dVLY/maxresdefault.jpg" },
            { date: "2024-07-19", time: "10:00 AM - 12:00 PM", location: "Room 103", details: "Stress and Nutrition", image: "https://avatars.mds.yandex.net/i?id=2a00000179f4f940a22285cc23ca6c7dcf1c-3765082-images-thumbs&n=13" },
            { date: "2024-07-20", time: "1:00 PM - 3:00 PM", location: "Room 103", details: "Stress Management for Professionals", image: "https://avatars.mds.yandex.net/i?id=c39201cd1bead6deab8728306eb676dfe771d46987d14a97-10231558-images-thumbs&n=13" }
        ],
        "growth": [
            { date: "2024-07-18", time: "10:00 AM - 12:00 PM", location: "Room 104", details: "Personal Growth Strategies", image: "https://avatars.mds.yandex.net/i?id=ca6a13ee48186cfc51f89d493cd4e0a4f373f90e-8324697-images-thumbs&n=13" },
            { date: "2024-07-19", time: "2:00 PM - 4:00 PM", location: "Room 104", details: "Self-Reflection and Motivation", image: "https://avatars.mds.yandex.net/i?id=b4c17d15853177d6e2435338f81cfc564f07c0b4-9271022-images-thumbs&n=13" },
            { date: "2024-07-20", time: "9:00 AM - 11:00 AM", location: "Room 104", details: "Goal Setting and Achievement", image: "https://avatars.mds.yandex.net/i?id=4bb3a0cae3e6a3cecf0ac5a4102c96462384810ac58c596d-10873778-images-thumbs&n=13" },
            { date: "2024-07-21", time: "10:00 AM - 12:00 PM", location: "Room 104", details: "Overcoming Obstacles", image: "https://avatars.mds.yandex.net/i?id=f0bdad30f60a378ac913f2caa85d08ca1156d1a7-5540708-images-thumbs&n=13" },
            { date: "2024-07-22", time: "1:00 PM - 3:00 PM", location: "Room 104", details: "Building Resilience", image: "https://avatars.mds.yandex.net/i?id=8b36f2fae0773592342544aea968539e600690cb-12805492-images-thumbs&n=13" }
        ],
        "yoga": [
            { date: "2024-07-20", time: "8:00 AM - 9:00 AM", location: "Yoga Hall", details: "Hatha Yoga Session", image: "https://i.pinimg.com/originals/f6/48/02/f648027cbe277f91973d279ee4f7ead6.jpg" },
            { date: "2024-07-21", time: "10:00 AM - 11:00 AM", location: "Yoga Hall", details: "Vinyasa Yoga Session", image: "https://i.pinimg.com/originals/e0/5c/72/e05c728cc9e9659e611d5043a974e0b1.gif" },
            { date: "2024-07-22", time: "6:00 AM - 7:00 AM", location: "Yoga Hall", details: "Sunrise Yoga", image: "https://static.vecteezy.com/system/resources/previews/000/679/573/original/man-doing-yoga-in-park.jpg" },
            { date: "2024-07-23", time: "8:00 AM - 9:00 AM", location: "Yoga Hall", details: "Restorative Yoga", image: "https://avatars.mds.yandex.net/i?id=93093db676bdf3d2425f12e534e37e0afd730e7239fa6560-11376718-images-thumbs&n=13" },
            { date: "2024-07-24", time: "7:00 PM - 8:00 PM", location: "Yoga Hall", details: "Evening Yoga", image: "https://i.pinimg.com/originals/b9/8b/15/b98b15447a1c30fd7e4771ee7f05220d.jpg" }
        ],
        "creative": [
            { date: "2024-07-22", time: "1:00 PM - 3:00 PM", location: "Art Room", details: "Painting Workshop", image: "https://avatars.mds.yandex.net/i?id=4ca26f018ca4af22576d910ecf066b13ff9e1616baaab30d-13509485-images-thumbs&n=13" },
            { date: "2024-07-23", time: "3:00 PM - 5:00 PM", location: "Art Room", details: "Creative Writing Workshop", image: "https://avatars.mds.yandex.net/i?id=e50808ced764f9316e613bb80f13d8c2408ef2db-8491909-images-thumbs&n=13" },
            { date: "2024-07-24", time: "10:00 AM - 12:00 PM", location: "Art Room", details: "Pottery Making", image: "https://avatars.mds.yandex.net/i?id=8a62db9980835a3684b8695caf31b92602b0da13-7886515-images-thumbs&n=13" },
            { date: "2024-07-25", time: "2:00 PM - 4:00 PM", location: "Art Room", details: "Sculpture Art", image: "https://avatars.mds.yandex.net/i?id=3105964252bb20ad43797420f7e23eb061b4689c-3885836-images-thumbs&n=13" },
            { date: "2024-07-26", time: "11:00 AM - 1:00 PM", location: "Art Room", details: "Dance and Movement", image: "https://avatars.mds.yandex.net/i?id=29deb52cd56b4e9cd96d9847ff0a2a0d24398cb3-8209628-images-thumbs&n=13" }
        ],
        "silent": [
            { date: "2024-07-24", time: "9:00 AM - 12:00 PM", location: "Meditation Hall", details: "Silent Meditation Session", image: "https://bookretreats.com/cdn-cgi/image/width=420,quality=65,f=auto,sharpen=1,fit=cover,gravity=auto/assets/photo/retreat/0m/39k/39708/p_1368410/1000_1709388441.jpg" },
            { date: "2024-07-25", time: "1:00 PM - 4:00 PM", location: "Meditation Hall", details: "Reflective Exercises", image: "https://bookretreats.com/cdn-cgi/image/width=420,quality=65,f=auto,sharpen=1,fit=cover,gravity=auto/assets/photo/retreat/0m/40k/40046/p_1383728/1000_1579853895.jpg" },
            { date: "2024-07-26", time: "7:00 AM - 10:00 AM", location: "Meditation Hall", details: "Extended Silent Retreat", image: "https://bookretreats.com/cdn-cgi/image/width=420,quality=65,f=auto,sharpen=1,fit=cover,gravity=auto/assets/photo/retreat/0m/22k/22227/p_716900/1000_1648508888.jpg" },
            { date: "2024-07-27", time: "10:00 AM - 1:00 PM", location: "Meditation Hall", details: "Silent Nature Walk", image: "https://bookretreats.com/cdn-cgi/image/width=420,quality=65,f=auto,sharpen=1,fit=cover,gravity=auto/assets/photo/retreat/0m/38k/38629/p_1319722/1000_1687189950.jpg" },
            { date: "2024-07-28", time: "2:00 PM - 5:00 PM", location: "Meditation Hall", details: "Silent Reflection and Journaling", image: "https://avatars.mds.yandex.net/i?id=f216ec76b8d9c54720137268b565f8ee-5112030-images-thumbs&n=13" }
        ],
        "seniors": [
            { date: "2024-07-26", time: "10:00 AM - 12:00 PM", location: "Room 105", details: "Gentle Yoga for Seniors", image: "https://avatars.mds.yandex.net/i?id=7a75b0ce5922f11cd070483575c3d99100f0fba4-4902600-images-thumbs&n=13" },
            { date: "2024-07-27", time: "2:00 PM - 4:00 PM", location: "Room 105", details: "Tai Chi for Seniors", image: "https://avatars.mds.yandex.net/i?id=1f69be62f4b2d43c70674d34e7fe63c5a875d5bb134483d7-12476725-images-thumbs&n=13" },
            { date: "2024-07-28", time: "10:00 AM - 12:00 PM", location: "Room 105", details: "Healthy Aging Tips", image: "https://avatars.mds.yandex.net/i?id=c77d6cd5c78e37cc4a0d6b85c121daa4d1f3a6027489b1c0-10652477-images-thumbs&n=13" },
            { date: "2024-07-29", time: "9:00 AM - 11:00 AM", location: "Room 105", details: "Nutrition for Seniors", image: "https://avatars.mds.yandex.net/i?id=9ee78c55be7e785232023e991e36df1e955bb48e-4011168-images-thumbs&n=13" },
            { date: "2024-07-30", time: "1:00 PM - 3:00 PM", location: "Room 105", details: "Mindfulness for Seniors", image: "https://avatars.mds.yandex.net/i?id=ec5cc845ffd1feceec38976f514df02a-5877417-images-thumbs&n=13" }
        ],
        "women": [
            { date: "2024-07-28", time: "9:00 AM - 11:00 AM", location: "Room 106", details: "Empowerment Workshops", image: "https://avatars.mds.yandex.net/i?id=ed93ce84383e1f580ab14b4382602f9a5247bafadd04d20f-13486952-images-thumbs&n=13" },
            { date: "2024-07-29", time: "1:00 PM - 3:00 PM", location: "Room 106", details: "Self-Care Activities", image: "https://avatars.mds.yandex.net/i?id=1131b74ddda8bdc89cdd3b4c072fea9f666ba682-12752860-images-thumbs&n=13" },
            { date: "2024-07-30", time: "10:00 AM - 12:00 PM", location: "Room 106", details: "Leadership Skills for Women", image: "https://avatars.mds.yandex.net/i?id=b799acfbba57be4aa7ea91c989a5f5be8b0f49ed21c3f4dc-12491641-images-thumbs&n=13" },
            { date: "2024-07-31", time: "9:00 AM - 11:00 AM", location: "Room 106", details: "Women in Leadership", image: "https://avatars.mds.yandex.net/i?id=08a7cb71543f2682b2e970dd0217d10c2b530a97-9069510-images-thumbs&n=13" },
            { date: "2024-08-01", time: "2:00 PM - 4:00 PM", location: "Room 106", details: "Women’s Health and Wellness", image: "https://avatars.mds.yandex.net/i?id=ed4404b6531396e7e1e1f754efad3f42559d8ed04f3bc484-11953055-images-thumbs&n=13" }
        ],
        "men": [
            { date: "2024-07-30", time: "10:00 AM - 12:00 PM", location: "Room 107", details: "Fitness Sessions", image: "https://avatars.mds.yandex.net/i?id=2145fd39407c28e1a42dc6a9e66a2867-4260084-images-thumbs&n=13" },
            { date: "2024-07-31", time: "2:00 PM - 4:00 PM", location: "Room 107", details: "Mental Health Workshops", image: "https://avatars.mds.yandex.net/i?id=d955bcd682ba589e0406f5fad0c8a06aff44a3ff-11944133-images-thumbs&n=13" },
            { date: "2024-08-01", time: "9:00 AM - 11:00 AM", location: "Room 107", details: "Men's Health and Wellness", image: "https://avatars.mds.yandex.net/i?id=9a8ab15fbbbe2225c3b16ff062f6d2b35e766e19-8184763-images-thumbs&n=13" },
            { date: "2024-08-02", time: "10:00 AM - 12:00 PM", location: "Room 107", details: "Stress Management for Men", image: "https://avatars.mds.yandex.net/i?id=1f1b7826d48ba6d6d2e15c24358722977edd0c51-8225379-images-thumbs&n=13" },
            { date: "2024-08-03", time: "1:00 PM - 3:00 PM", location: "Room 107", details: "Men's Fitness and Nutrition", image: "https://avatars.mds.yandex.net/i?id=a68b60bbdfc4601d665ad485493f155f46ff12a0-3028607-images-thumbs&n=13" }
        ],
        "cleanse": [
            { date: "2024-08-01", time: "8:00 AM - 10:00 AM", location: "Room 108", details: "Juice Cleanses", image: "https://avatars.mds.yandex.net/i?id=8555d4555e68edc7ae8de258929fb26e96d66617-12423090-images-thumbs&n=13" },
            { date: "2024-08-02", time: "10:00 AM - 12:00 PM", location: "Room 108", details: "Detoxifying Activities", image: "https://avatars.mds.yandex.net/i?id=1b13d4291205c7bfb140dd171a33f87093bca613-9744150-images-thumbs&ref=rim&n=33&w=400&h=300" },
            { date: "2024-08-03", time: "11:00 AM - 1:00 PM", location: "Room 108", details: "Herbal Cleanses", image: "https://avatars.mds.yandex.net/i?id=6aef7c80c0694a6e8eb003c59f0fe3d466db5046-9836683-images-thumbs&ref=rim&n=33&w=469&h=300" },
            { date: "2024-08-04", time: "9:00 AM - 11:00 AM", location: "Room 108", details: "Clean Eating", image: "https://avatars.mds.yandex.net/i?id=46464142060f19345efeeb29690aadf5381403b2-7975524-images-thumbs&ref=rim&n=33&w=443&h=300" },
            { date: "2024-08-05", time: "2:00 PM - 4:00 PM", location: "Room 108", details: "Detox Yoga", image: "https://avatars.mds.yandex.net/i?id=7f2d9ccd6b874e5e77b93100b6f99a3464061621-7942262-images-thumbs&n=13" }
        ],
        "nature": [
            { date: "2024-08-03", time: "7:00 AM - 9:00 AM", location: "Nature Trail", details: "Hiking", image: "https://www.uplandscenter.org/wp-content/uploads/2019/10/Copy-of-upland-exterior-day3-0053.jpg" },
            { date: "2024-08-04", time: "1:00 PM - 3:00 PM", location: "Nature Trail", details: "Nature-based Mindfulness Practices", image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F752740739%2F823944024563%2F1%2Foriginal.png?w=600&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C940%2C470&s=215520ee494f14d9bc18aa99ef90cc32" },
            { date: "2024-08-05", time: "6:00 AM - 8:00 AM", location: "Nature Trail", details: "Bird Watching", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm1D4XfbGhes50fiWzoo47fYxRta-_A8mfx7go9uoBdF9R3FsqfXBOFK78MtsTu81ls-4&usqp=CAU" },
            { date: "2024-08-06", time: "10:00 AM - 12:00 PM", location: "Nature Trail", details: "Nature Photography", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsE0QyhjOlZQmiL4Z0KsmEXk4g0n2KSguJLw9vKrzfF7Hc9hsnJY2LtyqzAqDQ9MJZ6m4&usqp=CAU" },
            { date: "2024-08-07", time: "1:00 PM - 3:00 PM", location: "Nature Trail", details: "Mindful Walking", image: "https://avatars.mds.yandex.net/i?id=ce862173f3d28a3286425e4492ff60f3d303e5e9-12390814-images-thumbs&n=13" }
        ],
        "workshop": [
            { date: "2024-08-05", time: "10:00 AM - 12:00 PM", location: "Room 109", details: "Digital Mindfulness", image: "https://avatars.mds.yandex.net/i?id=2b4ada6ed2956f22329cc906d7309e0ee9369bc1-9203641-images-thumbs&n=13" },
            { date: "2024-08-06", time: "2:00 PM - 4:00 PM", location: "Room 109", details: "Healthy Tech Habits", image: "https://avatars.mds.yandex.net/i?id=2b506359160b794b1f53ea45ed28eada54e7b37c-8751582-images-thumbs&n=13" },
            { date: "2024-08-07", time: "9:00 AM - 11:00 AM", location: "Room 109", details: "Digital Detox Techniques", image: "https://avatars.mds.yandex.net/i?id=19508882f13068f3bb4720e75506a1d8a0fc3c9e-4888906-images-thumbs&n=13" },
            { date: "2024-08-08", time: "10:00 AM - 12:00 PM", location: "Room 109", details: "Tech-Free Activities", image: "https://avatars.mds.yandex.net/i?id=b2ce1b9677841601997ad0b1de084bd3b923c722-7452211-images-thumbs&n=13" },
            { date: "2024-08-09", time: "1:00 PM - 3:00 PM", location: "Room 109", details: "Mindfulness with Technology", image: "https://avatars.mds.yandex.net/i?id=0e99b30f36faafe246673bd850b8ac29079ce905-4566892-images-thumbs&n=13" }
        ],
        "parents": [
            { date: "2024-08-07", time: "9:00 AM - 11:00 AM", location: "Room 110", details: "Parenting Techniques", image: "https://avatars.mds.yandex.net/i?id=3fad662a2f3705077ce171cbfc7ab68295158c43-4544610-images-thumbs&n=13" },
            { date: "2024-08-08", time: "1:00 PM - 3:00 PM", location: "Room 110", details: "Self-Care and Family Wellness", image: "https://avatars.mds.yandex.net/i?id=0973236d852a1407f34a4c049606fa0b2af99240-9181119-images-thumbs&n=13" },
            { date: "2024-08-09", time: "10:00 AM - 12:00 PM", location: "Room 110", details: "Mindful Parenting", image: "https://avatars.mds.yandex.net/i?id=c0187c012d415a59292f331aaee1e3ac78d0504d-10674688-images-thumbs&n=13" },
            { date: "2024-08-10", time: "9:00 AM - 11:00 AM", location: "Room 110", details: "Parenting in the Digital Age", image: "https://avatars.mds.yandex.net/i?id=0e12e7da80baa12e031918c30ca8881f6075c4ea-5337213-images-thumbs&n=13" },
            { date: "2024-08-11", time: "1:00 PM - 3:00 PM", location: "Room 110", details: "Healthy Family Dynamics", image: "https://avatars.mds.yandex.net/i?id=5f0150c7d9b8b64de79732be6fd800b353fade90-7946240-images-thumbs&n=13" }
        ]
    };
    for (let retreat in scheduleData) {
        const tbody = document.getElementById(`${retreat}-schedule`).querySelector("tbody");
        scheduleData[retreat].forEach(event => {
          const row = document.createElement("tr");
          // Create HTML for table row including image
          row.innerHTML = `
            <td>${event.date}</td>
            <td>${event.time}</td>
            <td>${event.location}</td>
            <td>${event.details}</td>
            <td><img src="${event.image}" alt="${event.details}" style="max-width: 100px;"></td>
          `;
          tbody.appendChild(row);
        });
      }
  });
// document.addEventListener("DOMContentLoaded", function() {
//     const scheduleData = {
//       "mindfulness": [
//         { date: "2024-07-10", time: "10:00 AM - 12:00 PM", location: "Room 101", details: "Introduction to Mindfulness", image: "path/to/mindfulness_image.jpg" },
//         { date: "2024-07-11", time: "2:00 PM - 4:00 PM", location: "Room 101", details: "Mindfulness Meditation Practices", image: "path/to/mindfulness_meditation_image.jpg" }
//         // Add more events with image paths
//       ],
//       // Define other retreat categories similarly
//     };

    // for (let retreat in scheduleData) {
    //   const tbody = document.getElementById(`${retreat}-schedule`).querySelector("tbody");
    //   scheduleData[retreat].forEach(event => {
    //     const row = document.createElement("tr");
    //     // Create HTML for table row including image
    //     row.innerHTML = `
    //       <td>${event.date}</td>
    //       <td>${event.time}</td>
    //       <td>${event.location}</td>
    //       <td>${event.details}</td>
    //       <td><img src="${event.image}" alt="${event.details}" style="max-width: 100px;"></td>
    //     `;
    //     tbody.appendChild(row);
    //   });
    // }
// });
