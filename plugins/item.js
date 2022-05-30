import Vue from 'vue'

class Theme {
  constructor (item) {
    this.name = item.name
    this.description = item.description
    this.link = item.eo4societyURL
    this.image = item.image
  }
}

class Variable {
  constructor (item) {
    this.name = item.name
    this.description = item.description
    this.link = item.eo4societyURL
    this.theme = item.theme
  }
}

class Project {
  constructor (item) {
    this.type = 'Feature'
    this.stac_version = '1.0.0'
    this.id = item.id
    this.properties = {
      title: item.title,
      description: item.description,
      'osc:name': item.name,
      'osc:themes': item.themes,
      'osc:status': item.status,
      'osc:technical_officer': {
        name: item.technical_officer,
        'e-mail': item.email
      },
      'osc:consortium': item.consortium,
      'osc:type': 'Project',
      start_datetime: item.start_datetime,
      end_datetime: item.end_datetime,
      datetime: item.datetime
    }
    this.geometry = null
    this.links = [
      {
        rel: 'via',
        href: item.link,
        title: 'Website'
      }
    ]
    this.assets = {}
    this.stac_extensions = [
      'https://stac-extensions.github.io/osc/v1.0.0/schema.json'
    ]
  }
}

class Product {
  constructor (item) {
    this.type = 'Feature'
    this.stac_version = '1.0.0'
    this.id = item.id
    this.properties = {
      start_datetime: item.start_datetime,
      end_datetime: item.end_datetime,
      title: item.title,
      description: item.description,
      'osc:missions': item.missions,
      'osc:project': item.project,
      'osc:themes': item.themes,
      'osc:variable': item.variable,
      'osc:status': item.status,
      'osc:region': item.region,
      'osc:type': 'Product',
      datetime: item.datetime
    }
    this.geometry = item.geometry
    this.links = [
      {
        rel: 'via',
        href: item.link,
        title: 'EO4Society Link'
      }
    ]
    this.assets = {}
    this.bbox = item.bbox
    this.stac_extensions = [
      'https://stac-extensions.github.io/osc/v1.0.0/schema.json'
    ]
  }
}

Vue.prototype.$Theme = Theme
Vue.prototype.$Variable = Variable
Vue.prototype.$Project = Project
Vue.prototype.$Product = Product
