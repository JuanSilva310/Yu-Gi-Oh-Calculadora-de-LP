const events = {

  /* ==================================================
     EVENTO 1 — TCG BOAS-VINDAS
  ================================================== */

  tcg_boas_vindas: {

    id: "tcg_boas_vindas",

    eventId: "00F",

    internalEvent: false,

    name: "TCG Boas-Vindas",

    background: "eventos/tcg_boas_vindas_background.png",

    banner: "eventos/tcg_boas_vindas_banner.png",

    history:
      "De uma boa recepção nasce um bom duelista. O que seria do jogo Monstros de Duelo e de um contador para o mesmo sem jogadores? Para garantir uma melhor experiência, a nossa equipe te dá as boas-vindas. Novo jogador, esperamos que se divirta e dê tudo de si para tornar-se o melhor duelista possível. Ficamos felizes por utilizar o nosso contador.",

    missions: [

      {
        id: "tcg_boas_vindas_missao_01",

        description:
          "Vença 10 duelos como Player 1.",

        condition: {
          type: "duel_won",
          winnerPlayer: 1,
          target: 10
        },

        reward: null
      },


      {
        id: "tcg_boas_vindas_missao_02",

        description:
          "Vença 10 duelos como Player 2.",

        condition: {
          type: "duel_won",
          winnerPlayer: 2,
          target: 10
        },

        reward: null
      },


      {
        id: "tcg_boas_vindas_missao_03",

        description:
          "Vença 10 duelos como Yugi Muto/Yami Yugi.",

        condition: {
          type: "duel_won",
          winnerCharacter: [
            "yugi_muto",
            "yami_yugi"
          ],
          target: 10
        },

        reward: {
          type: "bonus_key",
          key: "TCG_BV_001_BKC"
        }
      }

    ]

  },


  /* ==================================================
     EVENTO 2 — COPA KC
  ================================================== */

  copa_kc: {

    id: "copa_kc",

    eventId: "0C1",

    internalEvent: false,

    name: "Copa KC",

    background: "eventos/copa_kc_background.png",

    banner: "eventos/copa_kc_banner.png",

    history:
      "Prepare-se. Somente o melhor dos melhores ficará de pé. Um oferecimento da Kaiba Corp e de seu CEO, Seto Kaiba. Encare os maiores desafios desta copa e as mais complexas missões para obter prêmios incríveis. Complete todas as missões para se tornar um campeão da copa e o duelista número um. A Kaiba Corp o desafia a se tornar o número um. Você está pronto para o desafio?",

    missions: [

      {
        id: "copa_kc_missao_01",

        description:
          "Vença 10 duelos com Seto Kaiba.",

        condition: {
          type: "duel_won",
          winnerCharacter: [
            "seto_kaiba"
          ],
          target: 10
        },

        reward: null
      },


      {
        id: "copa_kc_missao_02",

        description:
          "Derrote Yugi Muto/Yami Yugi 10 vezes em duelo como Seto Kaiba.",

        condition: {
          type: "duel_won",
          winnerCharacter: [
            "seto_kaiba"
          ],
          loserCharacter: [
            "yugi_muto",
            "yami_yugi"
          ],
          target: 10
        },

        reward: null
      },


      {
        id: "copa_kc_missao_03",

        description:
          "Derrote Seto Kaiba 10 vezes em duelo como Yami Yugi.",

        condition: {
          type: "duel_won",
          winnerCharacter: [
            "yami_yugi"
          ],
          loserCharacter: [
            "seto_kaiba"
          ],
          target: 10
        },

        reward: null
      }

    ],

    rewards: [

      {
        id: "copa_kc_reward_01",

        requirement: {
          type: "missions_completed",
          amount: 2
        },

        reward: {
          type: "bonus_key",
          key: "LP-500-00-1E"
        }
      },


      {
        id: "copa_kc_reward_02",

        requirement: {
          type: "missions_completed",
          amount: 3
        },

        reward: {
          type: "bonus_key",
          key: "KC_CUP_010_BKC"
        }
      },


      {
        id: "copa_kc_reward_03",

        requirement: {
          type: "all_missions_completed"
        },

        reward: {
          type: "character_key",
          key: "CK-MOKUBA-KAIBA-000B"
        }
      }

    ]

  },


  /* ==================================================
     EVENTO 3 — AREIAS DO DESTINO
  ================================================== */

  areias_do_destino: {

    id: "areias_do_destino",

    eventId: "0AD",

    internalEvent: false,

    name: "Areias do Destino",

    background: "eventos/areias_do_destino_background.png",

    banner: "eventos/areias_do_destino_banner.png",

    history:
      "Nas areias do antigo Egito existe um antigo faraó cujas lendas contam que, através de uma das Relíquias do Milênio, era capaz de controlar o poder das trevas. Este mesmo faraó foi dito pelas lendas como sendo o Rei dos Jogos. Em busca de recuperar as suas memórias, Yugi Muto e Yami Yugi adentram as areias do antigo Egito para descobrir se Yami Yugi é, de fato ou não, o espírito do bravo faraó que viveu e reinou sobre as terras do Egito 5 mil anos atrás.",

    missions: [

      {
        id: "areias_do_destino_missao_01",

        description:
          "Derrote Seto Kaiba 10 vezes em duelo usando Yami Yugi.",

        condition: {
          type: "duel_won",
          winnerCharacter: [
            "yami_yugi"
          ],
          loserCharacter: [
            "seto_kaiba"
          ],
          target: 10
        },

        reward: null
      },


      {
        id: "areias_do_destino_missao_02",

        description:
          "Derrote Marik Ishtar 1 vez como Yami Yugi.",

        condition: {
          type: "duel_won",
          winnerCharacter: [
            "yami_yugi"
          ],
          loserCharacter: [
            "marik_ishtar"
          ],
          target: 1
        },

        reward: null
      },


      {
        id: "areias_do_destino_missao_03",

        description:
          "Jogue 100 duelos como Yami Yugi.",

        condition: {
          type: "duel_played",
          character: [
            "yami_yugi"
          ],
          target: 100
        },

        reward: null
      },


      {
        id: "areias_do_destino_missao_04",

        description:
          "Tenha 100 vitórias como Yami Yugi.",

        condition: {
          type: "duel_won",
          winnerCharacter: [
            "yami_yugi"
          ],
          target: 100
        },

        reward: null
      },


      {
        id: "areias_do_destino_missao_05",

        description:
          "Derrote Ishizu Ishtar 1 vez como Yami Yugi.",

        condition: {
          type: "duel_won",
          winnerCharacter: [
            "yami_yugi"
          ],
          loserCharacter: [
            "ishizu_ishtar"
          ],
          target: 1
        },

        reward: null
      },


      {
        id: "areias_do_destino_missao_06",

        description:
          "Derrote Odion 1 vez como Yami Yugi.",

        condition: {
          type: "duel_won",
          winnerCharacter: [
            "yami_yugi"
          ],
          loserCharacter: [
            "odion"
          ],
          target: 1
        },

        reward: null
      },


      {
        id: "areias_do_destino_missao_07",

        description:
          "Derrote Maximillion Pegasus 1 vez como Yami Yugi.",

        condition: {
          type: "duel_won",
          winnerCharacter: [
            "yami_yugi"
          ],
          loserCharacter: [
            "maximillion_pegasus"
          ],
          target: 1
        },

        reward: null
      },


      {
        id: "areias_do_destino_missao_08",

        description:
          "Jogue 100 duelos contra Seto Kaiba no modo DM.",

        condition: {
          type: "duel_played",
          opponentCharacter: [
            "seto_kaiba"
          ],
          mode: "dm",
          target: 100
        },

        reward: null
      }

    ],

    rewards: [

      {
        id: "areias_do_destino_reward_01",

        requirement: {
          type: "all_missions_completed"
        },

        reward: {
          type: "bonus_key",
          key: "DS_081_000_BKC"
        }
      },


      {
        id: "areias_do_destino_reward_02",

        requirement: {
          type: "all_missions_completed"
        },

        reward: {
          type: "character_key",
          key: "CK-ATÉM-000A"
        }
      }

    ]

  },


  /* ==================================================
     EVENTO INTERNO — COMPRA
  ================================================== */

  compra: {

    id: "compra",

    eventId: "0B0",

    internalEvent: true

  },


  /* ==================================================
     EVENTO INTERNO — ROLETA
  ================================================== */

  roleta: {

    id: "roleta",

    eventId: "111",

    internalEvent: true

  },


  /* ==================================================
     EVENTO INTERNO — ADMIN
  ================================================== */

  admin: {

    id: "admin",

    eventId: "999",

    internalEvent: true

  }

};
