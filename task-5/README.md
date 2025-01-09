Попробуйте воссоздать простейшую реализацию рендеринга Virtual DOM:

* Пусть имеется некий файл component.json который в виде json-объекта описывает структуру DOM-дерева, например:

```yaml
{
    "tag": "div",
    "attrs": {
        "class": "card"
    },
    "children": [
        {
            "tag": "img",
            "attrs": {
                "src": "/product.png",
                "alt": "Product image",
                "class": "card-img"
            },
            "children": []
        },
        {
            "tag": "div",
            "attrs": {
                "class": "card-body"
            },
            "children": [
                {
                    "tag": "h5",
                    "attrs": {
                        "class": "card-title"
                    },
                    "children": ["Куртка осенняя"]
                },
                {
                    "tag": "p",
                    "attrs": {
                        "class": "card-text"
                    },
                    "children": [
                        "Perfect for layering on top of their outfit, this navy blue printed midweight coat features a warm quilted wadding with a shower resistant finish to protect them from the elements"
                    ]
                },
                {
                    "tag": "a",
                    "attrs": {
                        "href": "/product",
                        "class": "btn btn-primary"
                    },
                    "children": ["Go to product page"]
                }
            ]
        }
    ]
}
```
* Напишите функцию которая загружает файл component.json и на основе него формирует соответствующую структуру HTML-элементов и отображает их в выбранном месте на странице.