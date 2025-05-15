using AutoMapper;
using DataAccess.DTOs;
using Entities.Concrete;
using System;

namespace Core.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // LoginDto -> User
            CreateMap<LoginDto, User>()
                .ForMember(dest => dest.PasswordHash, opt => opt.Ignore())
                .ForMember(dest => dest.PasswordSalt, opt => opt.Ignore());

            // User -> LoginDto
            CreateMap<User, LoginDto>()
                .ForMember(dest => dest.Password, opt => opt.Ignore());

            // RegisterDto -> User
            CreateMap<RegisterDto, User>()
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(_ => DateTime.UtcNow))
                .ForMember(dest => dest.PasswordHash, opt => opt.Ignore())
                .ForMember(dest => dest.PasswordSalt, opt => opt.Ignore());

            // User -> RegisterDto
            CreateMap<User, RegisterDto>()
                .ForMember(dest => dest.Password, opt => opt.Ignore());

            // MessagesDto -> Messages
            CreateMap<MessagesDto, Messages>()
                .ForMember(dest => dest.SendAt, opt => opt.MapFrom(_ => DateTime.UtcNow))
                .ForMember(dest => dest.UserId, opt => opt.Ignore()); // UserId alanını mapping'den çıkardık

            // Messages -> MessagesDto
            CreateMap<Messages, MessagesDto>();
        }
    }
}