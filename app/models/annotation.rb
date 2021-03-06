class Annotation < ActiveRecord::Base
  belongs_to :document

  def to_hash
    serializable_hash(
      methods: [:document_id, :comment, :x, :y, :page]
    )
  end
end
