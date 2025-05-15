using System.Collections.Generic;
using System.Threading.Tasks;
using DataAccess.DTOs;
using Entities.Concrete;

namespace Business.Services
{
    public interface IMessagesService
    {

        Task<int> AddMessageAsync(MessagesDto messagesDto);


        Task<bool> DeleteMessageAsync(int messageId);


        Task<List<Messages>> GetAllMessagesAsync();


    }
}