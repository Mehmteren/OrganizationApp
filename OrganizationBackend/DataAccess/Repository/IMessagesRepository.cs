using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities.Concrete;
using DataAccess.DTOs;

namespace DataAccess.Repository
{
    public interface IMessagesRepository
    {
        Task<int> AddMessageAsync(MessagesDto messagesDto);

        Task<bool> DeleteMessageAsync(int messagesId);

        Task<List<Messages>> GetAllMessagesAsync();

    }
}