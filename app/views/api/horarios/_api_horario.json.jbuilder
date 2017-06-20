json.extract! api_horario, :id, :curso_id, :profesor_id, :dia, :hora, :minutos, :posicion, :calendario, :duracion
json.url api_horario_url(api_horario, format: :json)
