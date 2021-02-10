class DoctorsController < ApplicationController
  before_action :set_user
  before_action :set_doctor, only: [:show]

  # GET /doctors
  def index
      if !params[:location].blank?
        @doctors = Doctor.by_location(params[:location]) 
    elsif !params[:specialty].blank?
        @doctors = Doctor.by_specialty(params[:specialty])
    else
        @doctors = @user.doctors
        render json: @doctors, except: [:created_at, :updated_at]
    end
  end

  # GET /doctors/1
  def show
    render json: @doctor, except: [:created_at, :updated_at]
  end

  # # POST /doctors
  # def create
  #   @doctor = Doctor.new(doctor_params)

  #   if @doctor.save
  #     render json: @doctor, status: :created, location: @doctor
  #   else
  #     render json: @doctor.errors, status: :unprocessable_entity
  #   end
  # end

  # # PATCH/PUT /doctors/1
  # def update
  #   if @doctor.update(doctor_params)
  #     render json: @doctor
  #   else
  #     render json: @doctor.errors, status: :unprocessable_entity
  #   end
  # end

  # # DELETE /doctors/1
  # def destroy
  #   @doctor.destroy
  # end

  private
    def set_user
      @user = User.find_by(params[:user_id])
    end

    # Use callbacks to share common setup or constraints between actions.
    def set_doctor
      @doctor = Doctor.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def doctor_params
      params.require(:doctor).permit(:name, :specialty, :insurance_accepted, :location, :user_id)
    end
end
