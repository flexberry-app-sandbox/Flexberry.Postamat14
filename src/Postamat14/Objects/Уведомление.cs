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
    /// Уведомление.
    /// </summary>
    // *** Start programmer edit section *** (Уведомление CustomAttributes)

    // *** End programmer edit section *** (Уведомление CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("УведомлениеE", new string[] {
            "Уведомление as \'Уведомление\'",
            "Хранение as \'Хранение\'",
            "Хранение.Продления as \'Продления\'"}, Hidden=new string[] {
            "Хранение.Продления"})]
    [MasterViewDefineAttribute("УведомлениеE", "Хранение", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Продления")]
    [View("УведомлениеL", new string[] {
            "Уведомление as \'Уведомление\'",
            "Хранение.Продления as \'Продления\'"})]
    public class Уведомление : ICSSoft.STORMNET.DataObject
    {
        
        private string fУведомление;
        
        private int fСгенКлюч;
        
        private string fФИО;
        
        private int fНомер;
        
        private IIS.Postamat14.Хранение fХранение;
        
        // *** Start programmer edit section *** (Уведомление CustomMembers)

        // *** End programmer edit section *** (Уведомление CustomMembers)

        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (Уведомление.Номер CustomAttributes)

        // *** End programmer edit section *** (Уведомление.Номер CustomAttributes)
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (Уведомление.Номер Get start)

                // *** End programmer edit section *** (Уведомление.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (Уведомление.Номер Get end)

                // *** End programmer edit section *** (Уведомление.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Уведомление.Номер Set start)

                // *** End programmer edit section *** (Уведомление.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (Уведомление.Номер Set end)

                // *** End programmer edit section *** (Уведомление.Номер Set end)
            }
        }
        
        /// <summary>
        /// СгенКлюч.
        /// </summary>
        // *** Start programmer edit section *** (Уведомление.СгенКлюч CustomAttributes)

        // *** End programmer edit section *** (Уведомление.СгенКлюч CustomAttributes)
        public virtual int СгенКлюч
        {
            get
            {
                // *** Start programmer edit section *** (Уведомление.СгенКлюч Get start)

                // *** End programmer edit section *** (Уведомление.СгенКлюч Get start)
                int result = this.fСгенКлюч;
                // *** Start programmer edit section *** (Уведомление.СгенКлюч Get end)

                // *** End programmer edit section *** (Уведомление.СгенКлюч Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Уведомление.СгенКлюч Set start)

                // *** End programmer edit section *** (Уведомление.СгенКлюч Set start)
                this.fСгенКлюч = value;
                // *** Start programmer edit section *** (Уведомление.СгенКлюч Set end)

                // *** End programmer edit section *** (Уведомление.СгенКлюч Set end)
            }
        }
        
        /// <summary>
        /// Уведомление.
        /// </summary>
        // *** Start programmer edit section *** (Уведомление.Уведомление CustomAttributes)

        // *** End programmer edit section *** (Уведомление.Уведомление CustomAttributes)
        [StrLen(255)]
        public virtual string Уведомление
        {
            get
            {
                // *** Start programmer edit section *** (Уведомление.Уведомление Get start)

                // *** End programmer edit section *** (Уведомление.Уведомление Get start)
                string result = this.fУведомление;
                // *** Start programmer edit section *** (Уведомление.Уведомление Get end)

                // *** End programmer edit section *** (Уведомление.Уведомление Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Уведомление.Уведомление Set start)

                // *** End programmer edit section *** (Уведомление.Уведомление Set start)
                this.fУведомление = value;
                // *** Start programmer edit section *** (Уведомление.Уведомление Set end)

                // *** End programmer edit section *** (Уведомление.Уведомление Set end)
            }
        }
        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (Уведомление.ФИО CustomAttributes)

        // *** End programmer edit section *** (Уведомление.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (Уведомление.ФИО Get start)

                // *** End programmer edit section *** (Уведомление.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (Уведомление.ФИО Get end)

                // *** End programmer edit section *** (Уведомление.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Уведомление.ФИО Set start)

                // *** End programmer edit section *** (Уведомление.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (Уведомление.ФИО Set end)

                // *** End programmer edit section *** (Уведомление.ФИО Set end)
            }
        }
        
        /// <summary>
        /// Уведомление.
        /// </summary>
        // *** Start programmer edit section *** (Уведомление.Хранение CustomAttributes)

        // *** End programmer edit section *** (Уведомление.Хранение CustomAttributes)
        [PropertyStorage(new string[] {
                "Хранение"})]
        [NotNull()]
        public virtual IIS.Postamat14.Хранение Хранение
        {
            get
            {
                // *** Start programmer edit section *** (Уведомление.Хранение Get start)

                // *** End programmer edit section *** (Уведомление.Хранение Get start)
                IIS.Postamat14.Хранение result = this.fХранение;
                // *** Start programmer edit section *** (Уведомление.Хранение Get end)

                // *** End programmer edit section *** (Уведомление.Хранение Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Уведомление.Хранение Set start)

                // *** End programmer edit section *** (Уведомление.Хранение Set start)
                this.fХранение = value;
                // *** Start programmer edit section *** (Уведомление.Хранение Set end)

                // *** End programmer edit section *** (Уведомление.Хранение Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "УведомлениеE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View УведомлениеE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("УведомлениеE", typeof(IIS.Postamat14.Уведомление));
                }
            }
            
            /// <summary>
            /// "УведомлениеL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View УведомлениеL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("УведомлениеL", typeof(IIS.Postamat14.Уведомление));
                }
            }
        }
    }
}
