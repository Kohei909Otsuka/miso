class CarFilter
  attr_accessor :height_min,
    :height_max,
    :width_min,
    :width_max,
    :length_min,
    :length_max,
    :luggage_size_min,
    :luggage_size_max,
    :zero_to_hundred_min,
    :zero_to_hundred_max,
    :max_speed_min,
    :max_speed_max,
    :max_torque_min,
    :max_torque_max,
    :fuel_consumption_min,
    :fuel_consumption_max

  def initialize(params)
    @height_min = params.fetch(:height_min, nil)
    @height_max = params.fetch(:height_max, nil)

    @width_min = params.fetch(:width_min, nil)
    @width_max = params.fetch(:width_max, nil)

    @length_min = params.fetch(:length_min, nil)
    @length_max = params.fetch(:length_max, nil)

    @luggage_size_min = params.fetch(:luggage_size_min, nil)
    @luggage_size_max = params.fetch(:luggage_size_max, nil)

    @zero_to_hundred_min = params.fetch(:zero_to_hundred_min, nil)
    @zero_to_hundred_max = params.fetch(:zero_to_hundred_max, nil)

    @max_speed_min = params.fetch(:max_speed_min, nil)
    @max_speed_max = params.fetch(:max_speed_max, nil)

    @max_torque_min = params.fetch(:max_torque_min, nil)
    @max_torque_max = params.fetch(:max_torque_max, nil)

    @fuel_consumption_min = params.fetch(:fuel_consumption_min, nil)
    @fuel_consumption_max = params.fetch(:fuel_consumption_max, nil)
  end

  def filter
    cars = Car.all

    if height_min.present?
      cars = cars.where("cars.height >= ?", height_min)
    end
    if height_max.present?
      cars = cars.where("cars.height <= ?", height_max)
    end

    if width_min.present?
      cars = cars.where("cars.width >= ?", width_min)
    end
    if width_max.present?
      cars = cars.where("cars.width <= ?", width_max)
    end

    if length_min.present?
      cars = cars.where("cars.length >= ?", length_min)
    end
    if length_max.present?
      cars = cars.where("cars.length <= ?", length_max)
    end

    if luggage_size_min.present?
      cars = cars.where("cars.luggage_size >= ?", luggage_size_min)
    end
    if luggage_size_max.present?
      cars = cars.where("cars.luggage_size <= ?", luggage_size_max)
    end

    if zero_to_hundred_min.present?
      cars = cars.where("cars.zero_to_hundred >= ?", zero_to_hundred_min)
    end
    if zero_to_hundred_max.present?
      cars = cars.where("cars.zero_to_hundred <= ?", zero_to_hundred_max)
    end

    if max_speed_min.present?
      cars = cars.where("cars.max_speed >= ?", max_speed_min)
    end
    if max_speed_max.present?
      cars = cars.where("cars.max_speed <= ?", max_speed_max)
    end

    if max_torque_min.present?
      cars = cars.where("cars.max_torque >= ?", max_torque_min)
    end
    if max_torque_max.present?
      cars = cars.where("cars.max_torque <= ?", max_torque_max)
    end

    if fuel_consumption_min.present?
      cars = cars.where("cars.fuel_consumption >= ?", fuel_consumption_min)
    end
    if fuel_consumption_max.present?
      cars = cars.where("cars.fuel_consumption <= ?", fuel_consumption_max)
    end


    return cars
  end
end
