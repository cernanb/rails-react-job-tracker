class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :company, :status
  has_many :tasks
end
