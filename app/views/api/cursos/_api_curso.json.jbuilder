json.extract! api_curso, :id, :nombre, :tipo_curso, :lugar, :descripcion
json.url api_curso_url(api_curso, format: :json)
