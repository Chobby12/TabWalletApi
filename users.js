const users = [
    {
        "id": 1,
        "username": "Emeka",
        "email": "emeka01@example.com",
        "age": 37,
        "isVerified": true,
        "walletAddress": "KOsslkeyccy8xakzamva1mxlnofazk1fysrlaotmtd2o4nfwglyzzson5yo0oyaqa",
        "balance": 688928,
        "canWithdraw": true,
        "portfolio": "diamond",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 2,
        "username": "Izu",
        "email": "izu02@example.com",
        "age": 46,
        "isVerified": false,
        "walletAddress": "KOn8cc9q5lkhrbfvs0fufnhls1fvpghld9ob1worsroyk92mlqzl3sh5ra7mzxnpc",
        "balance": 143236,
        "canWithdraw": false,
        "portfolio": "pro",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 3,
        "username": "Ada",
        "email": "ada03@example.com",
        "age": 28,
        "isVerified": true,
        "walletAddress": "KOffotdyksx9h6ea0og4n4gy8hjlmouvgroj9jcubpurgub6rszfwvmv8nfvdjeb4",
        "balance": 71777,
        "canWithdraw": true,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 4,
        "username": "Ekene",
        "email": "ekene04@example.com",
        "age": 29,
        "isVerified": true,
        "walletAddress": "KOw67lefcy7yoxrsluksjxqu895ykadw7hpvjgtzjydl0oyhbo7t5udljboza4ygb",
        "balance": 45935,
        "canWithdraw": true,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 5,
        "username": "ThankGod",
        "email": "thankgod05@example.com",
        "age": 63,
        "isVerified": false,
        "walletAddress": "KOoqemlasaksmt6xrwarekl4n0mvfbymqlrqtj1s49m55woxo9x4rbxdrzlom1y5x",
        "balance": 31756,
        "canWithdraw": false,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 6,
        "username": "Precious",
        "email": "precious06@example.com",
        "age": 45,
        "isVerified": false,
        "walletAddress": "KOoonhypog4cewaf7mpongomqcjo09aozxthuvmsatgljfzga2dljxo7xq1of0ddu",
        "balance": 2107,
        "canWithdraw": false,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 7,
        "username": "Ebuka",
        "email": "ebuka07@example.com",
        "age": 20,
        "isVerified": false,
        "walletAddress": "KOsyvovq6o6ks1n7fr9qqh70yrcnoyfbgabwsalqrg2spfc2qv10quulq6oq2howg",
        "balance": 521640,
        "canWithdraw": false,
        "portfolio": "diamond",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 8,
        "username": "Kofi",
        "email": "kofi08@example.com",
        "age": 57,
        "isVerified": true,
        "walletAddress": "KOcsfjf6akhtqmm0zrp5tborwqot1tf1tbe8roz4txzo2kjoxglo7eyt71ymyevza",
        "balance": 490163,
        "canWithdraw": true,
        "portfolio": "diamond",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 9,
        "username": "George",
        "email": "george09@example.com",
        "age": 24,
        "isVerified": false,
        "walletAddress": "KOosvu2obdfu0yfwukvjmoks3l2oqouv1smeekfj27xh8kkgfmpvfsvqcotktsl3e",
        "balance": 7059,
        "canWithdraw": false,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 10,
        "username": "Irem",
        "email": "irem10@example.com",
        "age": 26,
        "isVerified": false,
        "walletAddress": "KOmzsn99yuloklorr5sqror52o2t2xcrhapsepexla9zf4fryuuousrehkxdn9vxt",
        "balance": 62817,
        "canWithdraw": false,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 11,
        "username": "Kofi",
        "email": "kofi11@example.com",
        "age": 41,
        "isVerified": false,
        "walletAddress": "KOlpamprajuymodhbsbbuowc6ysxjguyq9vz1mw5pjfrwg3psqs0dzmzaxgy0chsf",
        "balance": 37499,
        "canWithdraw": false,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 12,
        "username": "Tyson",
        "email": "tyson12@example.com",
        "age": 50,
        "isVerified": false,
        "walletAddress": "KOkvka2r2msfzbbgwpd7r3m6zaclsupynlbecusllukutcyjyruhxxqv2shdrbjsh",
        "balance": 8349,
        "canWithdraw": false,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 13,
        "username": "Philip",
        "email": "philip13@example.com",
        "age": 48,
        "isVerified": true,
        "walletAddress": "KOcquvxfucclw4sa3xdvogooh9ncyuocqpxb8yjflcvfuoyk3eo0c1fg2a02p99vz",
        "balance": 8436,
        "canWithdraw": true,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 14,
        "username": "Christopher",
        "email": "christopher14@example.com",
        "age": 47,
        "isVerified": false,
        "walletAddress": "KOveejljrdnjemuq3yecwsfxh55lbf5fthzolsdcoazo1beg8dhebunozzkvtlubz",
        "balance": 43946,
        "canWithdraw": false,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 15,
        "username": "Jacob",
        "email": "jacob15@example.com",
        "age": 71,
        "isVerified": false,
        "walletAddress": "KOohpltwuwgdes7405hyygfuhp9qr2hc2gykdrnsgmpbt5c4c2sgmr9kgzyvtz4dz",
        "balance": 95534,
        "canWithdraw": false,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 16,
        "username": "Joshua",
        "email": "joshua16@example.com",
        "age": 45,
        "isVerified": true,
        "walletAddress": "KOywfpgy4wcxegrnfavsg54rx8uo98qn7fb5fta3kanzxym9oorbhapkl0nklo1jh",
        "balance": 5659,
        "canWithdraw": true,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 17,
        "username": "Mary",
        "email": "mary17@example.com",
        "age": 62,
        "isVerified": false,
        "walletAddress": "KOnnd7s3ho9znhdlonuqnfffhtfsm70rb94fwjopk1plhhm0rllzwg04lloafr2wt",
        "balance": 7267,
        "canWithdraw": false,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 18,
        "username": "Peter",
        "email": "peter18@example.com",
        "age": 65,
        "isVerified": false,
        "walletAddress": "KOmvdymfpo1cujo823shg8xg51v7x8qqcdhpo0sn0p2plz2k5ayc328lz2mxvdu70",
        "balance": 593008,
        "canWithdraw": false,
        "portfolio": "diamond",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 19,
        "username": "Uriel",
        "email": "uriel19@example.com",
        "age": 62,
        "isVerified": false,
        "walletAddress": "KOvalkhlapcclm3stowel4bcgurpjhczvaomtgaophoafq8ykf3tcfgcxylcsgfcr",
        "balance": 217744,
        "canWithdraw": false,
        "portfolio": "pro",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 20,
        "username": "Amanda",
        "email": "amanda20@example.com",
        "age": 68,
        "isVerified": true,
        "walletAddress": "KOuymkjwxzny4esjcqbqkbuke2o41horfqxzesu5kjpdzyv2cvgtoaywko5c4hgpn",
        "balance": 53803,
        "canWithdraw": true,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 21,
        "username": "Femi",
        "email": "femi21@example.com",
        "age": 58,
        "isVerified": true,
        "walletAddress": "KOehxddhx5sjvlqqt3mkzeksxzr5mayxdevq3anylh2361fkswx8fsxod2nqsm5ha",
        "balance": 18772,
        "canWithdraw": true,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 22,
        "username": "Temi",
        "email": "temi22@example.com",
        "age": 61,
        "isVerified": true,
        "walletAddress": "KOsrjlf3xmxxpzgerjhh3hlwjxh3clof8fnsday6g18kgwt4on9r5mqmj7t8qhke8",
        "balance": 4979,
        "canWithdraw": true,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 23,
        "username": "Robert",
        "email": "robert23@example.com",
        "age": 73,
        "isVerified": true,
        "walletAddress": "KOqmkuq4oafrzxtcyzwadnxd66f0fnzvwx8vprp2u51fn2ylehoonqof48pks9kww",
        "balance": 6154,
        "canWithdraw": true,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 24,
        "username": "Bob",
        "email": "bob24@example.com",
        "age": 64,
        "isVerified": false,
        "walletAddress": "KOjzhphoteplowqmkpw1qs2wau6mdb1goxbaetrdg72sosdoanol9amo6krkext9c",
        "balance": 12743,
        "canWithdraw": false,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 25,
        "username": "Henry",
        "email": "henry25@example.com",
        "age": 49,
        "isVerified": true,
        "walletAddress": "KOgpqozbhjvcof7oobkeahojdlswcxkgpjpdgjxwqppgg19flyq20boqlmdccxhg6",
        "balance": 2920,
        "canWithdraw": true,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 26,
        "username": "Oscar",
        "email": "oscar26@example.com",
        "age": 31,
        "isVerified": true,
        "walletAddress": "KOqpfyqkjv4zldubnfpvatc9px06jchyk34vq3wdmng3kxtqbmayutcgtbya7jalb",
        "balance": 772678,
        "canWithdraw": true,
        "portfolio": "diamond",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 27,
        "username": "Valentine",
        "email": "valentine27@example.com",
        "age": 36,
        "isVerified": false,
        "walletAddress": "KOgz7a4k1vg0kb9ufce3zfvp5v34sgclo2cagox7hjfrnhxqpzx0e0muwnszt5xr0",
        "balance": 72658,
        "canWithdraw": false,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 28,
        "username": "Joan",
        "email": "joan28@example.com",
        "age": 71,
        "isVerified": true,
        "walletAddress": "KOavmmbz9txrxy1horp3zrgo7pfexngy1gyco9mwx8t9thozt55wq5qxao4jkroga",
        "balance": 7694,
        "canWithdraw": true,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 29,
        "username": "Michelle",
        "email": "michelle29@example.com",
        "age": 77,
        "isVerified": false,
        "walletAddress": "KOxltvsep9n0olccowxpbx8zco94fdx3ssseueemwyzwxgeb9zemlnrtunbptjkoq",
        "balance": 3501,
        "canWithdraw": false,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 30,
        "username": "Zora",
        "email": "zora30@example.com",
        "age": 34,
        "isVerified": false,
        "walletAddress": "KOt5pj5jlr9ovglo7xxebrufwl6nxaln4xxlq4b7pofqgjexwdtwotnp2yhbogrtv",
        "balance": 65476,
        "canWithdraw": false,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 31,
        "username": "Amos",
        "email": "amos31@example.com",
        "age": 42,
        "isVerified": false,
        "walletAddress": "KO4h3v2leyvdh64rj9hq8o2cakrlprolw2eyjpqa8qjfheol2pvlwcozwppfqv79b",
        "balance": 1894,
        "canWithdraw": false,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 32,
        "username": "April",
        "email": "april32@example.com",
        "age": 43,
        "isVerified": false,
        "walletAddress": "KOjutz5qk77tzaow3vxegc4obyoxuav2upu6zx2klmvk8du3cy5klvx6ge0f4s4zh",
        "balance": 5901,
        "canWithdraw": false,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 33,
        "username": "Famous",
        "email": "famous33@example.com",
        "age": 31,
        "isVerified": true,
        "walletAddress": "KOtsqascbpbl6p1gkrvrzwbcoc0m6r2fqmyjnntsvqofk0w9zv84hbjporswcghmk",
        "balance": 3807,
        "canWithdraw": true,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 34,
        "username": "Barnabas",
        "email": "barnabas34@example.com",
        "age": 66,
        "isVerified": false,
        "walletAddress": "KOzyojbxphva3f0sfvah6wat0achlqcboe2jx7ofbp7rq8d5bqgc6txbny2ake9gr",
        "balance": 197678,
        "canWithdraw": false,
        "portfolio": "pro",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 35,
        "username": "Ebenezer",
        "email": "ebenezer35@example.com",
        "age": 39,
        "isVerified": true,
        "walletAddress": "KOycya3pqkxjem4nwovmyoz0cw4dwb4s65877dc88soskvy1qvsydpluvlgmvmme6",
        "balance": 2885,
        "canWithdraw": true,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 36,
        "username": "Shedrack",
        "email": "shedrack36@example.com",
        "age": 22,
        "isVerified": true,
        "walletAddress": "KOgkrxexq9kxdj6aprcr9e5macw5wloqdelgd1chtvrojopfco28qgn6fhlhazpzd",
        "balance": 1933,
        "canWithdraw": true,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 37,
        "username": "Charlotte",
        "email": "charlotte37@example.com",
        "age": 60,
        "isVerified": true,
        "walletAddress": "KObpqbpjljykhfokkzth76zck4oqvv5vbkuypoohtd07an1mn4dqnvm2jtnkndpyb",
        "balance": 109039,
        "canWithdraw": true,
        "portfolio": "pro",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 38,
        "username": "Nathaniel",
        "email": "nathaniel38@example.com",
        "age": 68,
        "isVerified": false,
        "walletAddress": "KOff16qd3svtc2yt8rewxootqskrcoswp0j5vqnld0kedeosx8tabkfs3splarljg",
        "balance": 8607,
        "canWithdraw": false,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 39,
        "username": "Esther",
        "email": "esther39@example.com",
        "age": 68,
        "isVerified": false,
        "walletAddress": "KOdulptndhadxgsxr9lntpwpdawfce12htaqqooows2gntoetngypsk4ggqothkzk",
        "balance": 418984,
        "canWithdraw": false,
        "portfolio": "diamond",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 40,
        "username": "Grace",
        "email": "grace40@example.com",
        "age": 68,
        "isVerified": true,
        "walletAddress": "KO44vco6uqcxal3dq1geang4hwzjotwoocuhaofl3lsaf2zmo53w0uptxb6sbtam5",
        "balance": 621020,
        "canWithdraw": true,
        "portfolio": "diamond",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 41,
        "username": "Uche",
        "email": "uche41@example.com",
        "age": 44,
        "isVerified": false,
        "walletAddress": "KOny1uvtt3wawfmovks8po8a3ptkpqy0owb5pbbgys5d3rdaszy5rfnlsjeqjpfle",
        "balance": 168767,
        "canWithdraw": false,
        "portfolio": "pro",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 42,
        "username": "Desmond",
        "email": "desmond42@example.com",
        "age": 33,
        "isVerified": true,
        "walletAddress": "KOesmsaotzn2qtmq2h3ywp25fzq7e5dgxbcctvx4nqsrjk2gh3vmqzmx2jwe6hxdx",
        "balance": 90132,
        "canWithdraw": true,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 43,
        "username": "Chinaza",
        "email": "chinaza43@example.com",
        "age": 19,
        "isVerified": true,
        "walletAddress": "KOsh2lce1lto1ksreu13c4mnvfobhmlvoob0ewhnj4ddgjvdysvsdgxghya60w3rt",
        "balance": 297692,
        "canWithdraw": true,
        "portfolio": "pro",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 44,
        "username": "Lilian",
        "email": "lilian44@example.com",
        "age": 24,
        "isVerified": false,
        "walletAddress": "KO9mksk3jwwqzqe4e8gvu3v0dqnxmun4qc0hrorh5d8lwz1qxbwyr33xlosjtt08j",
        "balance": 201956,
        "canWithdraw": false,
        "portfolio": "pro",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 45,
        "username": "Tari",
        "email": "tari45@example.com",
        "age": 62,
        "isVerified": true,
        "walletAddress": "KOmn52aq5kgstxvjkjf4dokbdwhotzwn8nu02wzxuwonoszcdtrdd34sflv3k43oy",
        "balance": 7154,
        "canWithdraw": true,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 46,
        "username": "Nnamdi",
        "email": "nnamdi46@example.com",
        "age": 54,
        "isVerified": true,
        "walletAddress": "KOovqgofotvpyrnocv7qa9neffhqkwwwlz6n54eoyostphtsec270hbvyp68a8bxo",
        "balance": 3263,
        "canWithdraw": true,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 47,
        "username": "Juliet",
        "email": "juliet47@example.com",
        "age": 22,
        "isVerified": false,
        "walletAddress": "KOhthczxtu3eqzluabucqgzsnbc2j8mnoe94q6fdsljh8fvqun88xrxnx23zbhrgl",
        "balance": 40759,
        "canWithdraw": false,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 48,
        "username": "Blessing",
        "email": "blessing48@example.com",
        "age": 40,
        "isVerified": true,
        "walletAddress": "KOvqn4ydnrtsh0rkkwo3nftszsttslc27ooqqgxeg0b29e8xzvc4ydmh6pv7matsc",
        "balance": 4144,
        "canWithdraw": true,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 49,
        "username": "Kingsley",
        "email": "kingsley49@example.com",
        "age": 68,
        "isVerified": true,
        "walletAddress": "KO3rz0837yo0ordxejzq8xjgkb2beap7m8jvyzox632hrpcwboskfwnfrvcwxoa43",
        "balance": 1460,
        "canWithdraw": true,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 50,
        "username": "Nkechi",
        "email": "nkechi50@example.com",
        "age": 59,
        "isVerified": false,
        "walletAddress": "KO3xrp6lbs0b2u7gwhsza1ggrssrxajrdwwd4zhoesft2kadcnk0xertto0logqro",
        "balance": 73738,
        "canWithdraw": false,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 51,
        "username": "Kelvin",
        "email": "kelvin51@example.com",
        "age": 54,
        "isVerified": false,
        "walletAddress": "KOogeyolbxb1n4zn7mgqqh9rxdtlwaljso9hpz8ga2lo1ojhhvdzr7namcxozo4wz",
        "balance": 338767,
        "canWithdraw": false,
        "portfolio": "diamond",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 52,
        "username": "Tosin",
        "email": "tosin52@example.com",
        "age": 41,
        "isVerified": false,
        "walletAddress": "KO6rz8pm7rbwxtghonkmqr4wqvt1uc6gcumpoocul6o9oomoeqxljnjvobposrksn",
        "balance": 9841,
        "canWithdraw": false,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 53,
        "username": "Faith",
        "email": "faith53@example.com",
        "age": 67,
        "isVerified": false,
        "walletAddress": "KOxsajfwwelaxlokuuejajjkbqpy6efjgdc56qcpw2wqlx02h9k1f9rkpdq8nth86",
        "balance": 52895,
        "canWithdraw": false,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 54,
        "username": "Chidera",
        "email": "chidera54@example.com",
        "age": 58,
        "isVerified": false,
        "walletAddress": "KO9fwoogjybywwhrjvfwajuvturlvzqprlgkarwojhrelclla234ezm4axf0u94ga",
        "balance": 1316,
        "canWithdraw": false,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 55,
        "username": "Obinna",
        "email": "obinna55@example.com",
        "age": 38,
        "isVerified": false,
        "walletAddress": "KOfyku1rhe7vnouq0bhtwqho4ogkhkncqwur1wy8hjzfbp4j6ohuebjaooa8v4y7y",
        "balance": 124219,
        "canWithdraw": false,
        "portfolio": "pro",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 56,
        "username": "Jude",
        "email": "jude56@example.com",
        "age": 67,
        "isVerified": false,
        "walletAddress": "KOkkgyv2bdovuarqln4s8ww6lemqrftwlovoy8qo3jxmjfocrejuj6ouxxb8ubrp8",
        "balance": 251995,
        "canWithdraw": false,
        "portfolio": "pro",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 57,
        "username": "Daniel",
        "email": "daniel57@example.com",
        "age": 26,
        "isVerified": true,
        "walletAddress": "KOyezxsyk2wyee9ycqwtqn7jd22bnbpbaensdyf5ejqp7yqenug6hzfnxu2eckn9o",
        "balance": 420135,
        "canWithdraw": true,
        "portfolio": "diamond",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 58,
        "username": "Hope",
        "email": "hope58@example.com",
        "age": 60,
        "isVerified": false,
        "walletAddress": "KO5smuegn68bqx4dyhw3oadkh16dxxeapohmqe7qvlqbdfdoxn6hbkh3hg8neyefu",
        "balance": 2787,
        "canWithdraw": false,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 59,
        "username": "Ijeoma",
        "email": "ijeoma59@example.com",
        "age": 77,
        "isVerified": true,
        "walletAddress": "KOhrq7ok4pau70mtwrnnafsob6bfyfjlwkycrgsxyssttwaxx4heezosoa6ooowok",
        "balance": 397879,
        "canWithdraw": true,
        "portfolio": "diamond",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 60,
        "username": "Cynthia",
        "email": "cynthia60@example.com",
        "age": 62,
        "isVerified": false,
        "walletAddress": "KOfxuhzhakhwd9xjsuwjnvzzoq7ysquhvklwuol6qe2auumnvukmwt7d0sums1q93",
        "balance": 78241,
        "canWithdraw": false,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 61,
        "username": "Pascal",
        "email": "pascal61@example.com",
        "age": 61,
        "isVerified": true,
        "walletAddress": "KOv3cq1h1oedobnhzse6ou4zjvwjenpmyhekzkjvjoc63soqoknlw7rzocvanhoct",
        "balance": 90486,
        "canWithdraw": true,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 62,
        "username": "Victor",
        "email": "victor62@example.com",
        "age": 76,
        "isVerified": true,
        "walletAddress": "KOtzyc20qofwrmhxvdonoykecnfonjdc4tefttah9kxempo2zfh1unjat3c2ymtvf",
        "balance": 21653,
        "canWithdraw": true,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 63,
        "username": "Miriam",
        "email": "miriam63@example.com",
        "age": 26,
        "isVerified": false,
        "walletAddress": "KObphx0y3fm14od12oym6welfgh8ylkb8k6uctkw7yh3tuocn6osnbrjjfqol9cuu",
        "balance": 2303,
        "canWithdraw": false,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 64,
        "username": "Godwin",
        "email": "godwin64@example.com",
        "age": 75,
        "isVerified": true,
        "walletAddress": "KOss1yhng1ossbw9jhgmvuyhhqqob2sc8tko1aenrg6k8xce6yxjt62vu7qvn4lwh",
        "balance": 11795,
        "canWithdraw": true,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 65,
        "username": "Samson",
        "email": "samson65@example.com",
        "age": 47,
        "isVerified": false,
        "walletAddress": "KOoygtdmjzfwjlzt90bswbrkvse7jgxvvcootalful6swu7l0mdqlqujdajwn3obd",
        "balance": 3260,
        "canWithdraw": false,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 66,
        "username": "Gloria",
        "email": "gloria66@example.com",
        "age": 52,
        "isVerified": false,
        "walletAddress": "KO1poatjsfuo249sjzxfvrv5elqo4xu5hke65szce9dyw830svurzzokk3l8dcyo2",
        "balance": 9502,
        "canWithdraw": false,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 67,
        "username": "Chika",
        "email": "chika67@example.com",
        "age": 76,
        "isVerified": false,
        "walletAddress": "KOsykt1jq8arbokgvh1ghyoekqra2rowormavyqlwrezghkr1ctomsyrdzzuxocgn",
        "balance": 48854,
        "canWithdraw": false,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 68,
        "username": "Divine",
        "email": "divine68@example.com",
        "age": 49,
        "isVerified": true,
        "walletAddress": "KOz1dwajhag3cxbmsaukxvzob8ydnnhlan2twdkcl9wneblcrwvrefohbrup04n63",
        "balance": 8676,
        "canWithdraw": true,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 69,
        "username": "Marvelous",
        "email": "marvelous69@example.com",
        "age": 34,
        "isVerified": false,
        "walletAddress": "KOv6mt9hp8gqkmlwmvnwozvxquc43asssywbvsleyu6uahyxbfrbru16tofx1g7mw",
        "balance": 4832,
        "canWithdraw": false,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 70,
        "username": "Goodness",
        "email": "goodness70@example.com",
        "age": 72,
        "isVerified": false,
        "walletAddress": "KOmacn12ogbpdrcjgwhhqgocn3lcdgzvhppoejgtzaxk3oemhve0juz5guvwc6wcr",
        "balance": 54871,
        "canWithdraw": false,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 71,
        "username": "Eunice",
        "email": "eunice71@example.com",
        "age": 62,
        "isVerified": true,
        "walletAddress": "KOpwqsokomcfczsaw6qysuddf9351ko3kfzkeooxz02unugzxf6dhvz9gfdgcqjoe",
        "balance": 100923,
        "canWithdraw": true,
        "portfolio": "pro",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 72,
        "username": "Lawrence",
        "email": "lawrence72@example.com",
        "age": 55,
        "isVerified": false,
        "walletAddress": "KO1bpwptfmw2m4xldzb5u1jdubwnaralhrxgjoaw1fnx0jdafnao0dpy7n0gaxm1j",
        "balance": 23304,
        "canWithdraw": false,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 73,
        "username": "Tony",
        "email": "tony73@example.com",
        "age": 64,
        "isVerified": true,
        "walletAddress": "KOdjot92xmgjsx9zjlckfkboguebbhx14o9vwbawjmlsrosrywyz9kztz2al7ovnq",
        "balance": 135260,
        "canWithdraw": true,
        "portfolio": "pro",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 74,
        "username": "Angela",
        "email": "angela74@example.com",
        "age": 62,
        "isVerified": true,
        "walletAddress": "KOdk9wa9dsldowugjfhwzcbpuurzn3vl8chk1tokw3pm4fqztrjpcousdme9w5lok",
        "balance": 29441,
        "canWithdraw": true,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 75,
        "username": "Ifeanyi",
        "email": "ifeanyi75@example.com",
        "age": 63,
        "isVerified": false,
        "walletAddress": "KOu6ntdmmyyndfuoacuco135p8uoekqsovdrrarvosuoyowlzpdkn7dsea9pjyg95",
        "balance": 7390,
        "canWithdraw": false,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 76,
        "username": "Becky",
        "email": "becky76@example.com",
        "age": 33,
        "isVerified": true,
        "walletAddress": "KOof1odgjlcevok1p3qfpmrvngpqaatnvngfpgw5nlgvvzmvgrdr0eyxwxmeoc2wp",
        "balance": 18578,
        "canWithdraw": true,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 77,
        "username": "Clara",
        "email": "clara77@example.com",
        "age": 73,
        "isVerified": true,
        "walletAddress": "KOat9luhuh1nkgp0bkodzvmjyjsdnondplyf3jcepbpm8zz0p4pwbt40u8nfva4ew",
        "balance": 4839,
        "canWithdraw": true,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 78,
        "username": "Uzo",
        "email": "uzo78@example.com",
        "age": 32,
        "isVerified": false,
        "walletAddress": "KOxm1yqpatr0zcb11f5khvjyjnd93dtjyh02j2vzyfaweooocb6k4qpzalqvodc0c",
        "balance": 791829,
        "canWithdraw": false,
        "portfolio": "diamond",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 79,
        "username": "Onyeka",
        "email": "onyeka79@example.com",
        "age": 33,
        "isVerified": false,
        "walletAddress": "KOocbx8od9oakogy0ocomfn7glek13cdznm9d2xttbxxshu5ycuesooruel343kqb",
        "balance": 149106,
        "canWithdraw": false,
        "portfolio": "pro",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 80,
        "username": "Matilda",
        "email": "matilda80@example.com",
        "age": 25,
        "isVerified": false,
        "walletAddress": "KO1xkgepmkmzj67dss9n9ovxykh15uyge8jk9o4hhql3kuucojnnpw3djupfsjs40",
        "balance": 71643,
        "canWithdraw": false,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 81,
        "username": "Chisom",
        "email": "chisom81@example.com",
        "age": 20,
        "isVerified": true,
        "walletAddress": "KOyo3oj5nasroto81h5rvcstbcfvjhorlerhevnqlcun8g54mbcxxv8h2hfl6jtb0",
        "balance": 99461,
        "canWithdraw": true,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 82,
        "username": "Rejoice",
        "email": "rejoice82@example.com",
        "age": 22,
        "isVerified": false,
        "walletAddress": "KO7hygj02ceo4ohukrgmw4bkrbmxpllk4sesn43kp7v1byvoocffollr8gq333wkg",
        "balance": 3967,
        "canWithdraw": false,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 83,
        "username": "Stanley",
        "email": "stanley83@example.com",
        "age": 53,
        "isVerified": true,
        "walletAddress": "KO8soeb2at7fsy8cbe3nyk63o84ytcbz43d7r1dy2bsyuglft301dejd41oh4mj5m",
        "balance": 3272,
        "canWithdraw": true,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 84,
        "username": "Paul",
        "email": "paul84@example.com",
        "age": 34,
        "isVerified": false,
        "walletAddress": "KOg7dbjw2feam4lqy1tzwgoenundyyxckxv4u62zcjtwyh0zzcqq38ohu4f1uc3tb",
        "balance": 1978,
        "canWithdraw": false,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 85,
        "username": "Rita",
        "email": "rita85@example.com",
        "age": 45,
        "isVerified": false,
        "walletAddress": "KOenz5zbfbaps7dmduxm0uf2ac3yzdoahzfybxc1dtoh6tcb3tdxe2jnsrmbjtey2",
        "balance": 9658,
        "canWithdraw": false,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 86,
        "username": "Anita",
        "email": "anita86@example.com",
        "age": 42,
        "isVerified": true,
        "walletAddress": "KOtdgexrtypmcjxl8auwrzwoqfvr8vsdxtywa2xxe98fo8roumjacsofdfdrqjzel",
        "balance": 700147,
        "canWithdraw": true,
        "portfolio": "diamond",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 87,
        "username": "Chinonso",
        "email": "chinonso87@example.com",
        "age": 40,
        "isVerified": true,
        "walletAddress": "KO54kx4m56akowmnoax5qu1drmwnhl9ct6yc2kfjouos3q0we0lserf3zmswmkkzc",
        "balance": 2948,
        "canWithdraw": true,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 88,
        "username": "Emmanuel",
        "email": "emmanuel88@example.com",
        "age": 25,
        "isVerified": true,
        "walletAddress": "KO52d9kga3eqybj0wwojlwyln5ayjhbsdqmyutkgezyh9eqyfnvecbf3vtkeggyx1",
        "balance": 5753,
        "canWithdraw": true,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 89,
        "username": "Marvel",
        "email": "marvel89@example.com",
        "age": 56,
        "isVerified": true,
        "walletAddress": "KOmkld90lmks587kg040hq4cxq9rxmdy0esrre4l68xw1hybzcrl0losw2x6y23t1",
        "balance": 546370,
        "canWithdraw": true,
        "portfolio": "diamond",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 90,
        "username": "Isaac",
        "email": "isaac90@example.com",
        "age": 69,
        "isVerified": true,
        "walletAddress": "KO8nwc8prcqkhycxbyvetu2oztjtmfoarvt4ofb1qbvo7aao3vbmmh2vnlpsxhmtp",
        "balance": 383159,
        "canWithdraw": true,
        "portfolio": "diamond",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 91,
        "username": "Timothy",
        "email": "timothy91@example.com",
        "age": 19,
        "isVerified": true,
        "walletAddress": "KObb821wmocoayv3hwushc5oxaco1rol95bdaxyovhqccewhcocsjl7x0j3es0vj6",
        "balance": 215138,
        "canWithdraw": true,
        "portfolio": "pro",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 92,
        "username": "Zubby",
        "email": "zubby92@example.com",
        "age": 67,
        "isVerified": true,
        "walletAddress": "KOcqap3j1ofl2mdg2t4saqoo001lpskjnjyomhj6ryechpuvvczs8zqoglvmao7rn",
        "balance": 18259,
        "canWithdraw": true,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 93,
        "username": "Elijah",
        "email": "elijah93@example.com",
        "age": 77,
        "isVerified": false,
        "walletAddress": "KOkgwnabdlezlaz1qwphtmfbc7whspfnlaxexxxetbonaycdo6lfdsv8tm09rpadf",
        "balance": 76502,
        "canWithdraw": false,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 94,
        "username": "Peace",
        "email": "peace94@example.com",
        "age": 26,
        "isVerified": true,
        "walletAddress": "KOgoywxoftjyyxkqnehpg0cwmowkbccxuqfvjyyyk60o6nj9gzt16qvhylksfwepj",
        "balance": 284910,
        "canWithdraw": true,
        "portfolio": "pro",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 95,
        "username": "Favour",
        "email": "favour95@example.com",
        "age": 44,
        "isVerified": false,
        "walletAddress": "KOhmccvvog9hc4b4lma7rsgxqfrzwuv5c98lezjgkgugftguuofwlwsbcbp1hy1uz",
        "balance": 226363,
        "canWithdraw": false,
        "portfolio": "pro",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 96,
        "username": "Ogechi",
        "email": "ogechi96@example.com",
        "age": 32,
        "isVerified": true,
        "walletAddress": "KOugzravpof6uvhvsfez3x1ddhktj33kzlwl5ormfsa4ovy27y2pxvqoqo3pe5plg",
        "balance": 152493,
        "canWithdraw": true,
        "portfolio": "pro",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 97,
        "username": "Lucky",
        "email": "lucky97@example.com",
        "age": 19,
        "isVerified": true,
        "walletAddress": "KOhjmmh3yjhdn7cnvq2jntdopcczxjqsoylefum2kbtreootmqsghlpntoyz5oacn",
        "balance": 26224,
        "canWithdraw": true,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 98,
        "username": "Olamide",
        "email": "olamide98@example.com",
        "age": 51,
        "isVerified": true,
        "walletAddress": "KOwuwlhszyd960ohed7d9wvm6nuwcyojo0zunzddwforfz2dy6jqqdrv9mo4n9un5",
        "balance": 66539,
        "canWithdraw": true,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 99,
        "username": "Joy",
        "email": "joy99@example.com",
        "age": 22,
        "isVerified": true,
        "walletAddress": "KOoyk5j8auwopbwqayc3dshzqoo8oq8rhjawnorysguplrgotkcxgvfnuukmhaj8j",
        "balance": 111266,
        "canWithdraw": true,
        "portfolio": "pro",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 100,
        "username": "Ibrahim",
        "email": "ibrahim100@example.com",
        "age": 59,
        "isVerified": false,
        "walletAddress": "KOmqf2st0dtocrfr1rg5xtjdgt5wp82c89co5ywv9w1kll4okxflhyvluvonm2hyo",
        "balance": 330301,
        "canWithdraw": false,
        "portfolio": "diamond",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 101,
        "username": "Bello",
        "email": "bello101@example.com",
        "age": 41,
        "isVerified": false,
        "walletAddress": "KOursshoz2d4oxcfh1cpexguyyu1n54g0o0u0orl5rqepowrjhpw4omdd7wfyovth",
        "balance": 36089,
        "canWithdraw": false,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 102,
        "username": "Fatima",
        "email": "fatima102@example.com",
        "age": 23,
        "isVerified": false,
        "walletAddress": "KOoeq8zh2q4h3xzcoxdaa5eoq3xb1smk7ccbmybonhqopmkevnzgv0oxxmlpxxznf",
        "balance": 56686,
        "canWithdraw": false,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 103,
        "username": "Amina",
        "email": "amina103@example.com",
        "age": 69,
        "isVerified": false,
        "walletAddress": "KOuvsh4q0qosup4hdnxoxkmktbpbr89qv3wp6om1amoecrv2fubzxjjgmptb7z3ua",
        "balance": 4295,
        "canWithdraw": false,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 104,
        "username": "Tunde",
        "email": "tunde104@example.com",
        "age": 27,
        "isVerified": false,
        "walletAddress": "KOke0cgodcguogr8mwmtxaqnzzxdv2pjfu1s7thdpmsomucjtbozqxdd5cw3fwpyz",
        "balance": 90506,
        "canWithdraw": false,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 105,
        "username": "Rukayat",
        "email": "rukayat105@example.com",
        "age": 75,
        "isVerified": false,
        "walletAddress": "KOlbyqmagd1luwsfxozwvy0esufmkjn1blvr1m3jfgbc1p8smko5ogeacf9cqayty",
        "balance": 9480,
        "canWithdraw": false,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 106,
        "username": "Yetunde",
        "email": "yetunde106@example.com",
        "age": 50,
        "isVerified": false,
        "walletAddress": "KOwquuzntu8yrff2hmwfohavz7xmk0eoj07v7qtknfgfhqwsqvjddo2pkbkbhb7do",
        "balance": 54128,
        "canWithdraw": false,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 107,
        "username": "Sulaiman",
        "email": "sulaiman107@example.com",
        "age": 42,
        "isVerified": true,
        "walletAddress": "KOellzmekptouokcpgg3dsgjqu93q9vz4touyk2ube9fq1dxekeybtf07o7tzhqft",
        "balance": 783065,
        "canWithdraw": true,
        "portfolio": "diamond",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 108,
        "username": "Habib",
        "email": "habib108@example.com",
        "age": 61,
        "isVerified": false,
        "walletAddress": "KO2mvz04etg0k5c4lvxeqp8jnty5vd81xyw7m0d9dxuyuffdf73sgxtj3l69otk3k",
        "balance": 25,
        "canWithdraw": false,
        "portfolio": "starter",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 109,
        "username": "Zainab",
        "email": "zainab109@example.com",
        "age": 22,
        "isVerified": false,
        "walletAddress": "KOvy2k5v2pqozf3arxafshjosjzw0xjbvlofr7vqnbn4x0gbjuq85j4ryyggoyc5a",
        "balance": 44090,
        "canWithdraw": false,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    },
    {
        "id": 110,
        "username": "Halima",
        "email": "halima110@example.com",
        "age": 40,
        "isVerified": true,
        "walletAddress": "KOymw5ee6rc9eub13uot91fffk6rp6esvvtoeorc59myptv6pruvsp1mvsaatdz50",
        "balance": 83337,
        "canWithdraw": true,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    }
]
module.exports = users