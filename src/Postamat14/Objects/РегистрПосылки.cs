﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Postamat14
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Регистр посылки.
    /// </summary>
    // *** Start programmer edit section *** (РегистрПосылки CustomAttributes)

    // *** End programmer edit section *** (РегистрПосылки CustomAttributes)
    [AutoAltered()]
    [Caption("Регистр посылки")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("РегистрПосылкиE", new string[] {
            "Номер as \'Номер\'",
            "Посылка as \'Посылка\'",
            "Посылка.Номер as \'Номер\'"}, Hidden=new string[] {
            "Посылка.Номер"})]
    [MasterViewDefineAttribute("РегистрПосылкиE", "Посылка", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Номер")]
    public class РегистрПосылки : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомер;
        
        private IIS.Postamat14.Посылка fПосылка;
        
        private IIS.Postamat14.Хранение fХранение;
        
        // *** Start programmer edit section *** (РегистрПосылки CustomMembers)

        // *** End programmer edit section *** (РегистрПосылки CustomMembers)

        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (РегистрПосылки.Номер CustomAttributes)

        // *** End programmer edit section *** (РегистрПосылки.Номер CustomAttributes)
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (РегистрПосылки.Номер Get start)

                // *** End programmer edit section *** (РегистрПосылки.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (РегистрПосылки.Номер Get end)

                // *** End programmer edit section *** (РегистрПосылки.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РегистрПосылки.Номер Set start)

                // *** End programmer edit section *** (РегистрПосылки.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (РегистрПосылки.Номер Set end)

                // *** End programmer edit section *** (РегистрПосылки.Номер Set end)
            }
        }
        
        /// <summary>
        /// Регистр посылки.
        /// </summary>
        // *** Start programmer edit section *** (РегистрПосылки.Посылка CustomAttributes)

        // *** End programmer edit section *** (РегистрПосылки.Посылка CustomAttributes)
        [PropertyStorage(new string[] {
                "Посылка"})]
        [NotNull()]
        public virtual IIS.Postamat14.Посылка Посылка
        {
            get
            {
                // *** Start programmer edit section *** (РегистрПосылки.Посылка Get start)

                // *** End programmer edit section *** (РегистрПосылки.Посылка Get start)
                IIS.Postamat14.Посылка result = this.fПосылка;
                // *** Start programmer edit section *** (РегистрПосылки.Посылка Get end)

                // *** End programmer edit section *** (РегистрПосылки.Посылка Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РегистрПосылки.Посылка Set start)

                // *** End programmer edit section *** (РегистрПосылки.Посылка Set start)
                this.fПосылка = value;
                // *** Start programmer edit section *** (РегистрПосылки.Посылка Set end)

                // *** End programmer edit section *** (РегистрПосылки.Посылка Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Postamat14.Хранение.
        /// </summary>
        // *** Start programmer edit section *** (РегистрПосылки.Хранение CustomAttributes)

        // *** End programmer edit section *** (РегистрПосылки.Хранение CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Хранение"})]
        public virtual IIS.Postamat14.Хранение Хранение
        {
            get
            {
                // *** Start programmer edit section *** (РегистрПосылки.Хранение Get start)

                // *** End programmer edit section *** (РегистрПосылки.Хранение Get start)
                IIS.Postamat14.Хранение result = this.fХранение;
                // *** Start programmer edit section *** (РегистрПосылки.Хранение Get end)

                // *** End programmer edit section *** (РегистрПосылки.Хранение Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РегистрПосылки.Хранение Set start)

                // *** End programmer edit section *** (РегистрПосылки.Хранение Set start)
                this.fХранение = value;
                // *** Start programmer edit section *** (РегистрПосылки.Хранение Set end)

                // *** End programmer edit section *** (РегистрПосылки.Хранение Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "РегистрПосылкиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РегистрПосылкиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РегистрПосылкиE", typeof(IIS.Postamat14.РегистрПосылки));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of РегистрПосылки.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfРегистрПосылки CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfРегистрПосылки CustomAttributes)
    public class DetailArrayOfРегистрПосылки : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Postamat14.DetailArrayOfРегистрПосылки members)

        // *** End programmer edit section *** (IIS.Postamat14.DetailArrayOfРегистрПосылки members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type РегистрПосылки by index.
        /// </summary>
        /// <summary>
        /// Adds object with type РегистрПосылки.
        /// </summary>
        public DetailArrayOfРегистрПосылки(IIS.Postamat14.Хранение fХранение) : 
                base(typeof(РегистрПосылки), ((ICSSoft.STORMNET.DataObject)(fХранение)))
        {
        }
        
        public IIS.Postamat14.РегистрПосылки this[int index]
        {
            get
            {
                return ((IIS.Postamat14.РегистрПосылки)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Postamat14.РегистрПосылки dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
