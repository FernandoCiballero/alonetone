class DisableThreddedModeration < ActiveRecord::Migration[6.0]
  def change
    change_column_default :thredded_user_details, :moderation_state, 1 # approved
  end
end
