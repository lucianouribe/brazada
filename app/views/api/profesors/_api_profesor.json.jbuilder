json.extract! api_profesor, :id, :nombre, :apellido, :especialidad, :no_clases, :salario
json.url api_profesor_url(api_profesor, format: :json)
