class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :event, :location, :ticket_price, :date, :time, :more_info
end
