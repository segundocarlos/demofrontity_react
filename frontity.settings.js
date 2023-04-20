const settings = {
  "name": "demofrontity-react",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "DonaLibros",
      "description": "Una plataforma para donar libros"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "sample",
              "/pagina-ejemplo/"
            ],
            [
              "Libros",
              "/libros/"
            ],
            [
              "Genero - Terror",
              "/genero/terror/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://ifindit4you.com/",
          "postTypes": [
            {
              "type": "libro",
              "endpoint": "libro",
              "archive": "/libros"
            }
          ],
          "taxonomies" : [
            {
              "taxonomy": "genero",
              "endpoint": "genero",
              "postTypeEndpoint": "libro",
              "params": {
                "per_page" : 5,
                "_embed" :true
              }
            }
          ]
        },
        
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
