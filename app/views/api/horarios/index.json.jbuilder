require 'pry'
# binding.pry
json.array! @api_horarios, partial: 'api/horarios/api_horario', as: :api_horario
