json.extract! api_profesor, :id, :nombre, :apellido, :especialidad, :cual_curso, :no_clases, :salario
json.url api_profesor_url(api_profesor, format: :json)
