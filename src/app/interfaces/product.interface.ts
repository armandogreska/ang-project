export default interface Product {
  id: number
  name: string
  slug: string
  parent: number
  type: string
  variation: string
  permalink: string
  sku: string
  short_description: string
  description: string
  on_sale: false
  prices: Prices
  price_html: string
  average_rating: string
  review_count: number
  images: Image[]
  categories: Category[]
  tags: []
  brands: []
  attributes: []
  variations: []
  grouped_products: []
  has_options: false
  is_purchasable: true
  is_in_stock: true
  is_on_backorder: false
  low_stock_remaining: null
  stock_availability: Stock_availability
  sold_individually: false
  add_to_cart: Add_to_cart
  extensions: object
}

interface Image {
  id: unknown
  src: string
  thumbnail: string
  srcset: string
  sizes: string
  name: string
  alt: string
}

interface Add_to_cart {
  text: string
  description: string
  url: string
  minimum: number
  maximum: number
  multiple_of: number
}

interface Stock_availability {
  text: string
  class: string
}

interface Category {
  id: number
  name: string
  slug: string
  link: string
}

interface Prices {
  price: string
  regular_price: string
  sale_price: string
  price_range: unknown
  currency_code: string
  currency_symbol: string
  currency_minor_unit: number
  currency_decimal_separator: string
  currency_thousand_separator: string
  currency_prefix: string
  currency_suffix: string
}
