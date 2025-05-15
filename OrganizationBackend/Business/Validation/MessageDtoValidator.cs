using DataAccess.DTOs;
using FluentValidation;

namespace Business.Validation
{
    public class MessagesDtoValidator : AbstractValidator<MessagesDto>
    {
        public MessagesDtoValidator()
        {
            RuleFor(m => m.Name)
                .NotEmpty().WithMessage("İsim alanı boş olamaz")
                .MaximumLength(100).WithMessage("İsim alanı en fazla 100 karakter olabilir");

            RuleFor(m => m.Email)
                .NotEmpty().WithMessage("E-posta alanı boş olamaz")
                .EmailAddress().WithMessage("Geçerli bir e-posta adresi giriniz")
                .MaximumLength(150).WithMessage("E-posta alanı en fazla 150 karakter olabilir");

            RuleFor(m => m.Message)
                .NotEmpty().WithMessage("Mesaj alanı boş olamaz")
                .MinimumLength(10).WithMessage("Mesaj en az 10 karakter olmalıdır");
        }
    }
}