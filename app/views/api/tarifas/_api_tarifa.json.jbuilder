json.extract! api_tarifa, :id, :plan, :nombre, :valor, :descripcion
json.url api_tarifa_url(api_tarifa, format: :json)
