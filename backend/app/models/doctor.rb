class Doctor < ApplicationRecord
    belongs_to :user

    def self.by_location(location)
        where(location: location)
    end

    def self.by_specialty(specialty)
        where(specialty: specialty)
    end
end
