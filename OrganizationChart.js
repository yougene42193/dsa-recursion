const org = [
    {id: 'Zuckerberg', boss: null},
    {id: 'Schroepfer', boss: 'Zuckerberg'},
    {id: 'Schrage', boss: 'Zuckerberg'},
    {id: 'Sandberg', boss: 'Zuckerberg'},
    {id: 'Bosworth', boss:'Schroepfer' },
    {id: 'Zhao', boss:'Schroepfer' },
    {id: 'Steve', boss:'Bosworth' },
    {id: 'Kyle', boss:'Bosworth' },
    {id: 'Andra', boss:'Bosworth' },
    {id: 'Richie', boss: 'Zhao'},
    {id: 'Sofia', boss: 'Zhao'},
    {id: 'Jen', boss: 'Zhao'},
    {id: 'VanDyck', boss:'Schrage' },
    {id: 'Swain', boss:'Schrage' },
    {id: 'Sabrina', boss:'VanDyck' },
    {id: 'Michelle', boss:'VanDyck' },
    {id: 'Josh', boss:'VanDyck' },
    {id: 'Blanch', boss:'Swain' },
    {id: 'Tom', boss:'Swain' },
    {id: 'Joe', boss:'Swain' },
    {id: 'Goler', boss:'Sandberg' },
    {id: 'Hernandez', boss:'Sandberg' },
    {id: 'Moissinac', boss:'Sandberg' },
    {id: 'Kelley', boss:'Sandberg' },
    {id: 'Eddie', boss:'Goler' },
    {id: 'Julie', boss:'Goler' },
    {id: 'Annie', boss:'Goler' },
    {id: 'Rowi', boss:'Hernandez'},
    {id: 'Inga', boss:'Hernandez'},
    {id: 'Morgan', boss:'Hernandez'},
    {id: 'Amy', boss:'Moissinac'},
    {id: 'Chuck', boss:'Moissinac'},
    {id: 'Vinni', boss:'Moissinac'},
    {id: 'Eric', boss:'Kelley'},
    {id: 'Ana', boss:'Kelley'},
    {id: 'Wes', boss:'Kelley'},
  ];

  function organize(org, boss) {
    let node = {};

    org
      .filter(item => item.boss === boss)
      .forEach(item => node[item.id] = organize(org, item.id));
    return node;  
}

console.log(JSON.stringify(organize(org, null)));