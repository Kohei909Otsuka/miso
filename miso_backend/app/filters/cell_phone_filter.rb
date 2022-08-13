class CellPhoneFilter
  attr_accessor :weight_min,
    :weight_max,
    :thickness_min,
    :thickness_max,
    :width_min,
    :width_max,
    :height_min,
    :height_max,
    :screen_size_min,
    :screen_size_max,
    :refresh_rate_min,
    :refresh_rate_max,
    :memory_min,
    :memory_max,
    :disk_min,
    :disk_max,
    :screen_kinds,
    :is_multi_sim

  def initialize(params)
    @width_min = params.fetch(:width_min, nil)
    @width_max = params.fetch(:width_max, nil)

    @thickness_min = params.fetch(:thickness_min, nil)
    @thickness_max = params.fetch(:thickness_max, nil)

    @width_min = params.fetch(:width_min, nil)
    @width_max = params.fetch(:width_max, nil)

    @height_min = params.fetch(:height_min, nil)
    @height_max = params.fetch(:height_max, nil)

    @screen_size_min = params.fetch(:screen_size_min, nil)
    @screen_size_max = params.fetch(:screen_size_max, nil)

    @refresh_rate_min = params.fetch(:refresh_rate_min, nil)
    @refresh_rate_max = params.fetch(:refresh_rate_max, nil)

    @memory_min = params.fetch(:memory_min, nil)
    @memory_max = params.fetch(:memory_max, nil)

    @disk_min = params.fetch(:disk_min, nil)
    @disk_max = params.fetch(:disk_max, nil)

    @screen_kinds = params.fetch(:screen_kinds, nil)

    @is_multi_sim = params.fetch(:is_multi_sim, nil)
  end

  def filter
    cell_phones = CellPhone.includes(:images).all

    if weight_min.present?
      cell_phones = cell_phones.where("cell_phones.weight >= ?", weight_min)
    end
    if weight_max.present?
      cell_phones = cell_phones.where("cell_phones.weight <= ?", weight_max)
    end

    if thickness_min.present?
      cell_phones = cell_phones.where("cell_phones.thickness >= ?", width_min)
    end
    if thickness_max.present?
      cell_phones = cell_phones.where("cell_phones.thickness_max <= ?", width_max)
    end

    if width_min.present?
      cell_phones = cell_phones.where("cell_phones.width >= ?", width_min)
    end
    if width_max.present?
      cell_phones = cell_phones.where("cell_phones.width <= ?", width_max)
    end

    if height_min.present?
      cell_phones = cell_phones.where("cell_phones.height >= ?", height_min)
    end
    if height_max.present?
      cell_phones = cell_phones.where("cell_phones.height <= ?", height_max)
    end

    if screen_size_min.present?
      cell_phones = cell_phones.where("cell_phones.screen_size >= ?", screen_size_min)
    end
    if screen_size_max.present?
      cell_phones = cell_phones.where("cell_phones.screen_size <= ?", screen_size_max)
    end

    if refresh_rate_min.present?
      cell_phones = cell_phones.where("cell_phones.refresh_rate >= ?", refresh_rate_min)
    end
    if refresh_rate_max.present?
      cell_phones = cell_phones.where("cell_phones.refresh_rate <= ?", refresh_rate_max)
    end

    if memory_min.present?
      cell_phones = cell_phones.where("cell_phones.memory >= ?", memory_min)
    end
    if memory_max.present?
      cell_phones = cell_phones.where("cell_phones.memory <= ?", memory_max)
    end

    if disk_min.present?
      cell_phones = cell_phones.where("cell_phones.disk >= ?", disk_min)
    end
    if disk_max.present?
      cell_phones = cell_phones.where("cell_phones.disk <= ?", disk_max)
    end

    if screen_kinds.present?
      cell_phones = cell_phones.where(screen_kind: screen_kinds)
    end

    if !is_multi_sim.nil?
      cell_phones = cell_phones.where(is_multi_sim: is_multi_sim)
    end

    return cell_phones
  end
end
