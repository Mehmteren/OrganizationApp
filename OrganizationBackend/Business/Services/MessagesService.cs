using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Core.Interfaces;
using DataAccess.DTOs;
using DataAccess.Repository;
using Entities.Concrete;
using FluentValidation;

namespace Business.Services
{
    public class MessagesService : IMessagesService
    {
        private readonly IMessagesRepository _messagesRepository;
        private readonly IValidator<MessagesDto> _validator;

        public MessagesService(IMessagesRepository messagesRepository, IValidator<MessagesDto> validator)
        {
            _messagesRepository = messagesRepository;
            _validator = validator;
        }
        public async Task<int> AddMessageAsync(MessagesDto messagesDto)
        {
            return await _messagesRepository.AddMessageAsync(messagesDto);
        }

        public async Task<bool> DeleteMessageAsync(int messageId)
        {
            return await _messagesRepository.DeleteMessageAsync(messageId);
        }

        public async Task<List<Messages>> GetAllMessagesAsync()
        {
            return await _messagesRepository.GetAllMessagesAsync();
        }

    }
}