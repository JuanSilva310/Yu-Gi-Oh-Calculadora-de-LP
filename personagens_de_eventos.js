const eventCharacters = {

  mokuba_kaiba: {

    name: "Mokuba Kaiba",

    characterKey: "CK-MOKUBA-KAIBA-000B",

    events: [
      {
        eventId: "0C1",
        response:
          "Sua bravura guiou você até um novo duelista. Parabéns, você desbloqueou Mokuba Kaiba."
      },
      {
        eventId: "0B0",
        response:
          "Muito obrigado pela compra. Você desbloqueou Mokuba Kaiba."
      }
    ],

    condition: "Concluir todas as missões",

    initialState: "blocked"
  },


  atem: {

    name: "Atém",

    characterKey: "CK-ATÉM-000A",

    events: [
      {
        eventId: "0AD",
        response:
          "Das areias do antigo Egito surge o rei dos jogos. Parabéns, você desbloqueou Atém."
      },
      {
        eventId: "0B0",
        response:
          "Muito obrigado pela compra. Você desbloqueou Atém."
      }
    ],

    condition: "Concluir todas as missões",

    initialState: "blocked"
  },


  mokuba_kaiba_olnd: {

    name: "Mokuba Kaiba OLND",

    characterKey: "CK-MOKUBA-OLND-001C",

    events: [
      {
        eventId: "111",
        response:
          "A Roleta do Milênio sorriu para você. Parabéns, você desbloqueou Mokuba Kaiba OLND."
      }
    ],

    condition: "Obtido exclusivamente pela Roleta do Milênio",

    initialState: "blocked"
  },


  tea_gardner_olnd: {

    name: "Téa Gardner OLND",

    characterKey: "CK-TÉA-GARDNER-OLND-000F",

    events: [
      {
        eventId: "111",
        response:
          "A Roleta do Milênio sorriu para você. Parabéns, você desbloqueou Téa Gardner OLND."
      }
    ],

    condition: "Obtido exclusivamente pela Roleta do Milênio",

    initialState: "blocked"
  }

};